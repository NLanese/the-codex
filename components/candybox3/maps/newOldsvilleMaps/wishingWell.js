// React + Next
import React from "react";

// Candybox
import { candyBoxStyles } from "../../const/styles";

// String.raw keeps every backslash exactly as typed, so the art can be pasted as-is
const WISHING_WELL_ART = String.raw`
       _______________________
     /|                       |\
    //|_______________________|\\
   ///                         \\\
  ///                           \\\
 ///                             \\\
///                               \\\
|/_________________________________\|
    ||                         ||
    ||                         ||
    ||                         ||
    ||                         ||
    ||                         ||
    ||                         ||
    ||    _________________    ||
    || .-' _______________ '-. ||
    ||' .-'  |    |    |  '-. '||
    || /|    |    |    |    |\ ||
   (||( |    |    |    |    | )||)
   |\  \|    |    |    |    |/  /|
   | \  '-.  |    |    |  .-'  / |
   | |'.   '-------------'   .'| |
   |\| |'-._______________.-'| |/|
   | \ | | | | | | | | | | | | / |
   | |'. | | | | | | | | | | .'| |
   |\| |'-._______________.-'| |/|
   | \ | | | | | | | | | | | | / |
    \|'. | | | | | | | | | | .'|/
     \ |'-._______________.-'| /
      '. | | | | | | | | | | .'
        '-._______________.-'
`.split("\n").slice(1, -1); // drop the empty first/last lines from the template

export default function NewOldsvilleWishingWell({
    inventory,
    setInventory,
    setSelectedMap,
    thingsDone,
    setThingsDone,
    setCandies,
    setLollipops,
}) {

    /////////////
    // Renders //
    /////////////

        function renderWell() {
            return (
                <div style={{flexDirection: 'row', display: 'flex'}}>
                    <div>

                    </div>
                    <div>
                        {WISHING_WELL_ART.map((line, i) => (
                            <p key={i} style={candyBoxStyles.mapStyle}>{line}</p>
                        ))}
                    </div>
                </div>
            );
        }

    //////////
    // Main //
    //////////
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {renderWell()}
        </div>
    );
}
