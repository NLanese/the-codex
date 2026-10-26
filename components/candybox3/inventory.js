// Candybox
import { OstrichDropDown } from "@ostrich_development/ostrich-components";
import { candyBoxStyles } from "./const/styles";
import { useEffect, useState } from "react";

// String.raw keeps every backslash exactly as typed, so the art can be edited as-is
const INVENTORY_TITLE = String.raw`
    ________    __        __  __      __   ________    __        __   ____________   _________   _________  __      __
   /__   __/   /  \      / /  \ \    / /  /  _____/   /  \      / /  /____   ____/  /  ___   /  /  ___   /  \ \    / /
     /  /     / /\ \    / /    \ \  / /  /  /___     / /\ \    / /       /  /      /  /  /  /  /  /__/  /    \ \  / /
    /  /     / /  \ \  / /      \ \/ /  /  ____/    / /  \ \  / /       /  /      /  /  /  /  /  __   _/      \ \/ /
 __/  /___  / /    \ \/ /        \  /  /  /_____   / /    \ \/ /       /  /      /  /__/  /  /  /  \  \       /  /
/________/ /_/      \__/          \/  /________/  /_/      \__/       /__/      /________/  /__/    \__\     /__/
`.split("\n").slice(1, -1); // drop the empty first/last lines from the template

export default function Inventory({
    inventory,
    thingsDone,
    setThingsDone,
    setHealth,
    maxHealth,
    setMaxHealth
}){

    const [weapons, setWeapons] = useState(findAllWeapons())
    const [activeWeapon, setActiveWeapon] = useState(null)
    useEffect(() => {
        setActiveWeapon(weapons.filter(wep => wep.status == 'active'))
    }, [weapons])

    function findAllWeapons(){
        return inventory.filter(item => item.type === 'weapon');
    }

    function renderTitle(){
        return (
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
                <div>
                    {INVENTORY_TITLE.map((line, i) => (
                        <p key={i} style={candyBoxStyles.mapStyle}>{line}</p>
                    ))}
                </div>
            </div>
        )
    }

    function renderWeapon(){
        <OstrichDropDown tabs={weapons}
        />
    }

    return(
        <div>
            {renderTitle()}
        </div>
    )
}
