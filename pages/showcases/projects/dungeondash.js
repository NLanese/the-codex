// React + Next
import React, { useEffect, useRef, useState } from "react";

// Jotai
import { useAtom } from "jotai";
import { directoryDataState, tabBarState } from "../../../jotai/atoms";

// Showcase Kit
import { Page, Hero, ActionButton, Section, Chip, Notice, DOC } from "../../../components/Showcase/showcaseKit";

// Unity WebGL build of the first three levels, written here by DungeonDash's "Build Levels 1-3 for The Codex" menu item
const GAME_SRC = "/games/dungeondash/game/index.html"

const CONTROLS = [
    { keys: "A D / ← →", action: "Move left / right" },
    { keys: "W S / ↑ ↓", action: "Climb ladders" },
    { keys: "Space", action: "Jump (hold longer to jump higher)" },
    { keys: "Shift", action: "Roll (dodge through enemies)" },
    { keys: "1 or 0", action: "Attack (tap 3 times quickly for a combo; in the air for a jump attack)" },
    { keys: "Q or P", action: "Switch weapon" },
    { keys: "3 or 8", action: "Drink a health potion (blue)" },
    { keys: "Space (at a door)", action: "Walk through to the world map" },
]


export default function DungeonDashProjectPage() {

    ///////////
    // State //
    ///////////

        const [directory, setDirectory] = useAtom(directoryDataState)
        const [activeTab, setActiveTab] = useAtom(tabBarState)
        const frameRef = useRef(null)
        const [buildFound, setBuildFound] = useState(null)   // null = still checking
        const [frameKey, setFrameKey] = useState(0)          // bump to restart the game

    ////////////////
    // UseEffects //
    ////////////////

        useEffect(() => {
            setDirectory("Portfolio")
            setActiveTab("Ongoing Projects")
        }, [])

        // Shows a notice instead of a broken frame until the Unity build has been added
        useEffect(() => {
            fetch(GAME_SRC, { method: "HEAD" })
                .then((res) => setBuildFound(res.ok))
                .catch(() => setBuildFound(false))
        }, [])

    ///////////////
    // Functions //
    ///////////////

        function restartGame(){
            setFrameKey((k) => k + 1)
        }

        function focusGame(){
            if (frameRef.current){
                frameRef.current.focus()
            }
        }

        function goFullscreen(){
            const frame = frameRef.current
            if (frame && frame.requestFullscreen){
                frame.requestFullscreen()
            }
        }

    ////////////////
    // Renderings //
    ////////////////

        function renderGame(){
            if (buildFound === false){
                return (
                    <Notice>
                        The playable build isn't uploaded yet. In Unity, run <b>DungeonDash → Build Levels 1-3 for The Codex</b>, then deploy.
                    </Notice>
                )
            }
            return (
                <div>
                    <div style={{ position: "relative", width: "100%", maxWidth: 960, aspectRatio: "16 / 10", margin: "0 auto", borderRadius: 18, overflow: "hidden", backgroundColor: "#0d0b1e", boxShadow: "0 10px 30px rgba(17, 1, 59, 0.28)" }}>
                        {buildFound ? (
                            <iframe
                                key={frameKey}
                                ref={frameRef}
                                src={GAME_SRC}
                                title="Dungeon Dash"
                                onLoad={focusGame}
                                allow="fullscreen; autoplay; gamepad"
                                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                            />
                        ) : null}
                    </div>
                    <p style={{ textAlign: "center", color: DOC.muted, fontSize: 15, marginTop: 12 }}>
                        Click inside the game to give it your keyboard.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 6 }}>
                        <ActionButton label="Restart" variant="dark" onClick={restartGame} />
                        <ActionButton label="Fullscreen" variant="light" onClick={goFullscreen} />
                    </div>
                </div>
            )
        }

        function renderControls(){
            return (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
                    {CONTROLS.map((c) => (
                        <div key={c.keys} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                            <Chip mono>{c.keys}</Chip>
                            <span style={{ fontSize: 16, color: DOC.text }}>{c.action}</span>
                        </div>
                    ))}
                </div>
            )
        }

    /////////////////
    // Main Return //
    /////////////////

        return (
            <Page>
                <Hero
                    eyebrow="In the Workshop · Unity"
                    title="Dungeon Dash"
                    intro="A 2D action platformer I'm building in Unity. Climb, roll and fight your way through goblins, bats and traps. This early build has the first three levels, linked by a world map, playable right in your browser."
                />

                <Section id="play" eyebrow="Play" title="Levels 1–3">
                    {renderGame()}
                </Section>

                <Section id="controls" eyebrow="How to Play" title="Controls">
                    {renderControls()}
                </Section>

                <Notice>
                    Early build: expect rough edges. Works best in a desktop browser with a keyboard. If you fall in battle, hit Restart.
                </Notice>
            </Page>
        )
}
