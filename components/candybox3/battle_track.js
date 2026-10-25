// React
import React, { useEffect, useLayoutEffect, useReducer, useRef, useState } from "react";

// Styles
import { candyBoxStyles } from "./const/styles";

// Candybox3 Functions
import checkInvFor from "./func/checkInventoryFor";
import makeNewInventoryWithReplacement from "./func/updateFromInv";
import findActiveWeapon from "./func/findActiveWeapon";
import { hasDone, markDone } from "./func/thingsDone";

/*
    HOW THIS WORKS
    --------------
    1. Everything (player, enemies) is positioned INSIDE the track box, which is
       `position: relative`. So `left: 0` means "left edge of the track", not the page.

    2. The floor is measured, not hard-coded. After the track art renders we find
       the <p> row the characters stand on (`selectedTrack.groundRow`, defaults to
       the last row) and record where its bottom edge is. Every token is drawn with
       `top: floorY` + `translateY(-100%)`, so its BOTTOM sits on the floor no
       matter how many rows tall the token is.

    3. There is ONE game loop (requestAnimationFrame). All moving data lives in a
       ref (`game.current`) so the loop never reads stale React state. Each frame it
       moves the player, moves every spawned enemy toward the player, handles
       spawning and combat, and then forces one re-render to draw the new positions.

    Speeds are "milliseconds per pixel":
       - player:  selectedTrack.playerMoveSpeed (default 10, same as before)
       - enemy:   enemy.movementSpeed (wasp 3, millipede 15 - same as before)

    Optional track setting: `maximumEnemySpawns` - total enemies that can spawn in one run.
    Optional per-enemy track setting: `rowsAboveFloor` (e.g. 1 for a flying wasp).

    Health comes in as props (health / setHealth / maxHealth from candybox_3.js).
    Enemy hits deal  max(1, round(atk * (1 - armor.reduction)))  every atkSpeed ms.
    At 0 HP everything freezes, the found candies are lost, and leaving sends you
    back to town with 1 HP.
*/

const DEFAULT_PLAYER_MS_PER_PX = 10;
const MAX_FRAME_MS = 100;     // if the tab was in the background, don't teleport
const QUEUE_GAP_PX = 4;       // space between enemies waiting in line

function rollCandies(t) {
    if (typeof t.dropCandies === "function") return t.dropCandies();
    const min = t.candiesDroppedMin ?? 0;
    const max = t.candiesDroppedMax ?? min;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function BATTLE_TRACK({
    setSelectedMap,
    selectedTrack,
    inventory,
    setInventory,
    thingsDone,
    setThingsDone,
    setCandies,
    setLollipops,
    selectedWeapon,
    selectedArmor,
    selectedBoots,
    selectedTrinkets,
    knownSpells,
    knownPotions,
    knownSkills,
    health,
    setHealth,
    maxHealth
}) {

    ///////////
    // State //
    ///////////

        // PLAYER \\
            const sponge = checkInvFor(selectedTrinkets || [], "sponge");
            const isShrunk = sponge && sponge.status === "active";

            const weapon = findActiveWeapon(inventory);
            const weaponRef = useRef(weapon);
            weaponRef.current = weapon;

            // Armor: damage taken is multiplied by (1 - reduction)
            const armor = inventory.find(itm => itm?.type === "armor" && itm.status === "active");
            const armorRef = useRef(armor);
            armorRef.current = armor;

            // Health lives in candybox_3.js; fall back to a local 100 HP if it isn't passed in
            const [localHealth, setLocalHealth] = useState(100);
            const hp = health ?? localHealth;
            const setHp = setHealth ?? setLocalHealth;
            const maxHp = maxHealth ?? 100;
            const hpRef = useRef(hp);
            hpRef.current = hp;
            const [isDead, setIsDead] = useState(false);

            const [inCombat, setInCombat] = useState(false);
            const [fightingEnemy, setFightingEnemy] = useState(null);

        // TRINKETS \\
            const hasSponge = checkInvFor(inventory, "sponge") ? true : false;
            function activateShrink() {
                let foundSponge = checkInvFor(inventory, "sponge");
                foundSponge.status = "active";
                let newInv = makeNewInventoryWithReplacement(inventory, "sponge", foundSponge);
                setInventory(newInv);
            }

        // TRACK STATE \\
            const [msg, setMsg] = useState([selectedTrack.openingMsg]);
            const msgBoxRef = useRef(null);
            useEffect(() => {
                // keep the newest message in view
                if (msgBoxRef.current) msgBoxRef.current.scrollTop = msgBoxRef.current.scrollHeight;
            }, [msg]);
            const [isComplete, setIsComplete] = useState(false);
            const [candiesAcquired, setCandiesAcquired] = useState(0);
            const candiesRef = useRef(0);

        // DOM REFS \\
            const viewportRef = useRef(null); // scrollable window onto the track
            const trackRef = useRef(null);    // position: relative - everything is placed in here
            const artRef = useRef(null);      // wraps selectedTrack.render
            const playerRef = useRef(null);
            const enemyEls = useRef(new Map()); // enemy id -> DOM node (for widths)

        // LAYOUT (measured floor) \\
            const [layout, setLayout] = useState(null);
            const layoutRef = useRef(null);

            useLayoutEffect(() => {
                function measure() {
                    const track = trackRef.current;
                    const art = artRef.current;
                    if (!track || !art) return;
                    const rows = art.querySelectorAll("p");
                    if (!rows.length) return;
                    const idx = Math.min(selectedTrack.groundRow ?? rows.length - 1, rows.length - 1);
                    const groundRow = rows[idx];
                    const trackRect = track.getBoundingClientRect();
                    const rowRect = groundRow.getBoundingClientRect();
                    const next = {
                        floorY: rowRect.bottom - trackRect.top,
                        rowHeight: rowRect.height,
                        trackWidth: art.scrollWidth,
                    };
                    layoutRef.current = next;
                    setLayout(next);
                }
                measure();
                // Web fonts can change row heights after first paint
                if (typeof document !== "undefined" && document.fonts?.ready) {
                    document.fonts.ready.then(measure);
                }
            }, [selectedTrack]);

        // GAME STATE (mutable, read by the loop) \\
            const game = useRef(null);
            const [, rerender] = useReducer(x => x + 1, 0);

    ///////////////
    // Game Loop //
    ///////////////

            useEffect(() => {
                game.current = {
                    playerX: 0,
                    playerMoveAcc: 0,
                    playerAtkAcc: 0,
                    enemies: [],
                    spawnAcc: 0,
                    spawnWeight: 1,
                    spawnCount: 0,
                    nextId: 1,
                    fighting: null,
                    complete: false,
                    dead: false,
                    hp: hpRef.current,
                    last: null,
                };

                let raf;
                const tick = (now) => {
                    const g = game.current;
                    const dt = g.last == null ? 0 : Math.min(now - g.last, MAX_FRAME_MS);
                    g.last = now;
                    if (layoutRef.current) {
                        update(g, dt);
                        followPlayer(g);
                        rerender();
                    }
                    raf = requestAnimationFrame(tick);
                };
                raf = requestAnimationFrame(tick);
                return () => cancelAnimationFrame(raf);
                // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [selectedTrack]);

            function update(g, dt) {
                if (g.dead) return; // everything freezes when you die
                const L = layoutRef.current;
                const playerW = playerRef.current?.offsetWidth ?? 0;
                const finalX = selectedTrack.finalX
                    ? Math.min(selectedTrack.finalX, L.trackWidth - playerW)
                    : L.trackWidth - playerW;

                // --- Spawning ---
                if (!g.complete && selectedTrack.spawnTick) {
                    g.spawnAcc += dt;
                    while (g.spawnAcc >= selectedTrack.spawnTick) {
                        g.spawnAcc -= selectedTrack.spawnTick;
                        trySpawn(g, L);
                    }
                }

                // --- Player movement (stops while fighting) ---
                if (!g.fighting && !g.complete) {
                    const msPerPx = selectedTrack.playerMoveSpeed ?? DEFAULT_PLAYER_MS_PER_PX;
                    g.playerMoveAcc += dt;
                    const steps = Math.floor(g.playerMoveAcc / msPerPx);
                    g.playerMoveAcc -= steps * msPerPx;
                    g.playerX = Math.min(g.playerX + steps, finalX);
                    if (g.playerX >= finalX) {
                        g.complete = true;
                        g.enemies = [];       // you made it out - remaining enemies are left behind
                        setIsComplete(true);
                        addToMessages(<p>You made it to the end of the track!</p>);
                    }
                }

                // --- Enemy movement: walk left toward the player ---
                // Each height (rowsAboveFloor) is its own lane: enemies only queue behind
                // enemies in the SAME lane, so flyers pass over ground enemies.
                // The front enemy of every lane can reach the player; whoever gets there
                // first fights, the others wait at the player until that fight ends.
                const playerRight = g.playerX + playerW;
                const laneLimit = new Map(); // lane -> left-most x the next enemy in that lane may occupy
                const ordered = [...g.enemies].sort((a, b) => a.x - b.x || a.id - b.id);
                for (const e of ordered) {
                    const lane = e.rowsAboveFloor;
                    const limit = laneLimit.get(lane) ?? playerRight;
                    if (e !== g.fighting) {
                        e.moveAcc += dt;
                        const steps = Math.floor(e.moveAcc / e.speed);
                        e.moveAcc -= steps * e.speed;
                        e.x -= steps;
                    }
                    if (e.x <= limit) {
                        e.x = limit;
                        if (limit === playerRight && !g.fighting) startFight(g, e);
                    }
                    const w = enemyEls.current.get(e.id)?.offsetWidth ?? 20;
                    laneLimit.set(lane, e.x + w + QUEUE_GAP_PX);
                }

                // --- Combat ---
                if (g.fighting) {
                    const e = g.fighting;
                    const w = weaponRef.current;

                    // Player hits enemy
                    g.playerAtkAcc += dt;
                    while (g.fighting && g.playerAtkAcc >= w.speed) {
                        g.playerAtkAcc -= w.speed;
                        e.health -= w.damage;
                        e.wasHit = true; // shows its HP bar from now on
                        if (e.health <= 0) slayEnemy(g, e);
                    }

                    // Enemy hits player
                    if (g.fighting) {
                        e.atkAcc += dt;
                        while (!g.dead && e.atkAcc >= e.template.atkSpeed) {
                            e.atkAcc -= e.template.atkSpeed;
                            takeHit(g, e);
                        }
                    }
                }
            }

            /*
                Spawn budget: every spawnTick the budget grows by 1 (up to maxSpawnWeight).
                A random enemy from the track is picked; if the budget can afford its
                spawnWeight it spawns and the budget is spent, otherwise nothing spawns this
                tick and the budget keeps saving up. Heavier enemies are therefore rarer and
                need a few quiet ticks before they can show up.
            */
            function trySpawn(g, L) {
                // Stop once the track's total spawn limit is reached (no limit if unset)
                const cap = selectedTrack.maximumEnemySpawns;
                if (cap != null && g.spawnCount >= cap) return;
                g.spawnWeight = Math.min(selectedTrack.maxSpawnWeight ?? Infinity, g.spawnWeight + 1);
                const list = selectedTrack.enemies;
                if (!list?.length) return;
                const pick = list[Math.floor(Math.random() * list.length)];
                if (pick && g.spawnWeight >= pick.spawnWeight) {
                    g.enemies.push({
                        id: g.nextId++,
                        template: pick,
                        x: L.trackWidth,               // enter from the right edge
                        rowsAboveFloor: pick.rowsAboveFloor ?? 0,
                        speed: pick.movementSpeed || 10,
                        health: pick.health,
                        maxHealth: pick.health,
                        wasHit: false,
                        moveAcc: 0,
                        atkAcc: 0,
                    });
                    g.spawnWeight -= pick.spawnWeight;
                    g.spawnCount++;
                }
            }

            function startFight(g, e) {
                g.fighting = e;
                g.playerAtkAcc = 0;
                setInCombat(true);
                setFightingEnemy(e.template);
            }

            // Enemy lands a hit on the player
            function takeHit(g, e) {
                const reduction = armorRef.current?.reduction ?? 0;
                const raw = typeof e.template.attack === "function" ? e.template.attack() : e.template.atk;
                const dmg = Math.max(1, Math.round(raw * (1 - reduction)));
                g.hp = Math.max(0, g.hp - dmg);
                setHp(g.hp);
                if (g.hp <= 0) {
                    g.dead = true;
                    setIsDead(true);
                    setInCombat(false);
                    addToMessages(<p>{e.template.playerKillMessage}</p>);
                    addToMessages(<p>You dropped everything you found.</p>);
                }
            }

            function slayEnemy(g, e) {
                g.enemies = g.enemies.filter(x => x !== e);
                g.fighting = null;
                g.playerAtkAcc = 0;
                setInCombat(false);
                setFightingEnemy(null);

                const candies = rollCandies(e.template);
                candiesRef.current += candies;
                setCandiesAcquired(candiesRef.current);
                addToMessages(<p>{e.template.deathMessage}</p>);
                addToMessages(<p>{`You've picked up ${candies} candies. You have found ${candiesRef.current} candies total.`}</p>);
            }

            // Keep the player in view when the track is wider than the screen
            function followPlayer(g) {
                const vp = viewportRef.current;
                if (!vp || vp.scrollWidth <= vp.clientWidth) return;
                vp.scrollLeft = g.playerX - vp.clientWidth * 0.3;
            }

    ///////////////
    // Functions //
    ///////////////

            function handleLeave() {
                if (isDead) {
                    // You limp back to town with 1 HP
                    setHp(1);
                    setSelectedMap(selectedTrack.returnTo);
                }
                else if (isComplete) {
                    if (selectedTrack.thingDone && !hasDone(thingsDone, selectedTrack.thingDone)) {
                        markDone(setThingsDone, selectedTrack.thingDone);
                    }
                    setCandies(prev => prev + candiesAcquired);
                    setSelectedMap(selectedTrack.winReturnTo);
                } else {
                    setSelectedMap(selectedTrack.returnTo);
                }
            }

            function addToMessages(m) {
                setMsg(prev => [...prev, m]);
            }

    /////////////
    // Renders //
    /////////////

        function tokenStyle(x, rowsAboveFloor = 0) {
            return {
                position: "absolute",
                left: x,
                top: layout.floorY - rowsAboveFloor * layout.rowHeight,
                transform: "translateY(-100%)", // bottom of token sits on the floor
                pointerEvents: "none",
            };
        }

        function renderToken() {
            if (isShrunk) {
                return <p style={candyBoxStyles.mapStyle}>\o/</p>;
            }
            return (
                <>
                    <p style={{ ...candyBoxStyles.mapStyle, fontWeight: 700 }}>\O/</p>
                    <p style={{ ...candyBoxStyles.mapStyle, fontWeight: 900 }}> | </p>
                    <p style={{ ...candyBoxStyles.mapStyle, fontWeight: 900 }}>/ \</p>
                </>
            );
        }

        function renderDude() {
            const g = game.current;
            if (!g || !layout) return null;
            return (
                <div ref={playerRef} style={tokenStyle(g.playerX)}>
                    {renderToken()}
                </div>
            );
        }

        // Tiny HP bar floating just above an enemy's head (only after it's been hit)
        function renderEnemyHpBar(e) {
            const pct = Math.max(0, Math.min(1, e.health / e.maxHealth)) * 100;
            return (
                <div style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: "100%",
                    marginBottom: 2,
                    height: 3,
                    backgroundColor: "#d9d9d9",
                    border: "1px solid #555",
                }}>
                    <div style={{ width: `${pct}%`, height: "100%", backgroundColor: "#2ecc40" }} />
                </div>
            );
        }

        function renderBaddies() {
            const g = game.current;
            if (!g || !layout) return null;
            return g.enemies.map(e => (
                <div
                    key={e.id}
                    ref={el => el ? enemyEls.current.set(e.id, el) : enemyEls.current.delete(e.id)}
                    style={tokenStyle(e.x, e.rowsAboveFloor)}
                >
                    {e.wasHit && renderEnemyHpBar(e)}
                    {e.template.render}
                </div>
            ));
        }

        function renderMessages() {
            return msg.map((m, i) => <div key={i}>{m}</div>);
        }

        function renderLeave() {
            let leaveTxt = "Leave (If you leave now you won't keep what you found)";
            if (isDead) {
                leaveTxt = "You died. Return to town";
            }
            else if (isComplete) {
                leaveTxt = "Leave (and keep what you found)";
            }
            return (
                <div style={{ marginTop: 20, marginBottom: 20, display: "flex", justifyContent: "center" }}>
                    <button onClick={() => handleLeave()}>{leaveTxt}</button>
                </div>
            );
        }

    //////////
    // Main //
    //////////
    return (
        <div>
            <div style={{ border: "1px solid black", marginTop: 40, marginLeft: "20%", width: "60%", marginBottom: 20 }}>
                <div ref={msgBoxRef} style={{ height: 120, padding: 10, overflowY: "auto" }}>
                    {renderMessages()}
                </div>
                {renderLeave()}
            </div>
            <div style={{ height: 120, marginLeft: "20%", width: "60%", marginBottom: 25, backgroundColor: "green" }}>
                Abilities will go here
                <div>Health: {hp} / {maxHp}</div>
                {inCombat && fightingEnemy && <div>Fighting: {fightingEnemy.name}</div>}
            </div>

            {/* Scrollable window - stops a wide track from hanging off the left of the screen */}
            <div ref={viewportRef} style={{ maxWidth: "100%", width: "fit-content", margin: "0 auto", overflowX: "auto" }}>
                {/* position: relative => player & enemies are placed relative to THIS box */}
                <div ref={trackRef} style={{ position: "relative", width: "max-content" }}>
                    <div ref={artRef}>{selectedTrack.render}</div>
                    {renderDude()}
                    {renderBaddies()}
                </div>
            </div>
        </div>
    );
}
