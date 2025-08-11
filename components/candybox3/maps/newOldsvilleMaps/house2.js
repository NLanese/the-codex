// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";

import {candyBoxStyles} from "../../const/styles"


export default function NewOldsvilleHouse2({
    inventory,
    setInventory,
    setSelectedMap,
    thingsDone,
    setThingsDone
}){

    function renderHouse2(){
        return(
                    <>
                    <p style={candyBoxStyles.mapStyle}>   /       |                                                                                                     |      \</p>
                    <p style={candyBoxStyles.mapStyle}>  /        |                                                                                                     |        \</p>
                    <p style={candyBoxStyles.mapStyle}> /         |                                                                                                     |         \</p>
                    <p style={candyBoxStyles.mapStyle}>|          |                                                             ________________________________________|          |</p>
                    <p style={candyBoxStyles.mapStyle}>|          |                                                             |                CELLAR                 |          |</p>
                    <p style={candyBoxStyles.mapStyle}>|          |                                                             |_______________________________________|</p>
                    <p style={candyBoxStyles.mapStyle}>|          |                                                             |                                       |          |</p>
                    <p style={candyBoxStyles.mapStyle}>|          |                                                             |                                       |          |</p>
                    <p style={candyBoxStyles.mapStyle}>|          |          o                                                  |                                       |          |</p>
                    <p style={candyBoxStyles.mapStyle}>|          |          |   $%                                             |                                       |          |</p>
                    <p style={candyBoxStyles.mapStyle}>|          |       %$ |  $$$%                                            |                                       |          |</p>
                    <p style={candyBoxStyles.mapStyle}>|          |      $%$_| /$                                               | \                                     |          |</p>
                    <p style={candyBoxStyles.mapStyle}>|          |         \|/                                                 |\ \                                    |          |</p>
                    <p style={candyBoxStyles.mapStyle}>|          |          |                                                  | \ \                                   |          |</p>
                    <p style={candyBoxStyles.mapStyle}>|          |         _|_                                                 |  \ \                                  |          |</p>
                    <p style={candyBoxStyles.mapStyle}>|          |         | |                                                 |   \ \                                 |          |</p>
                    <p style={candyBoxStyles.mapStyle}>|          |        /   \                                                |    \ \                                |          |</p>
                    <p style={candyBoxStyles.mapStyle}>|          |_______|     |______________                                 |    |\ \                               |          |</p>
                    <p style={candyBoxStyles.mapStyle}>|         /        |     |             /|                                |    ||\ \                              |          |</p>
                    <p style={candyBoxStyles.mapStyle}>|        /          \___/             / |                                |    || \ \                             |          |</p>
                    <p style={candyBoxStyles.mapStyle}>|       /                            /  |                                |    ||  \ \                            |          |</p>
                    <p style={candyBoxStyles.mapStyle}>|      /____________________________/   |                                |    ||   \ \                           |          |</p>
                    <p style={candyBoxStyles.mapStyle}>|      |             |              |   |                                |    ||    \ \                          |          |</p>
                    <p style={candyBoxStyles.mapStyle}>|      |             |              |   |                                |    ||     \|\                         |          |</p>
                    <p style={candyBoxStyles.mapStyle}>|      |             |              |   |                                |    ||     || \                        |          |</p>
                    <p style={candyBoxStyles.mapStyle}>|      |    O        |        O     |   |________________________________|____||_____||__\_______________________|          |</p>
                    <p style={candyBoxStyles.mapStyle}>|      |             |              |  /                                                                         \          |</p>
                    <p style={candyBoxStyles.mapStyle}>|      |             |              | /                                                                           \         |</p>
                    <p style={candyBoxStyles.mapStyle}>|      |_____________|______________|/                                                                             \        |</p>
                    <p style={candyBoxStyles.mapStyle}>|      /                                                                                                            \       |</p>
                    <p style={candyBoxStyles.mapStyle}>|     /                                                                                                              \      |</p>
                    <p style={candyBoxStyles.mapStyle}>|    /                                                                                                                \     |</p>
                    <p style={candyBoxStyles.mapStyle}>|   /                                                                                                                  \    |</p>
                    <p style={candyBoxStyles.mapStyle}>|  /                                                                                                                    \   |</p>
                    <p style={candyBoxStyles.mapStyle}>| /                                                                                                                      \  |</p>
                    <p style={candyBoxStyles.mapStyle}>|/________________________________________________________________________________________________________________________\ |</p>
                </>
                )
    }

    return(
        <div></div>
    )
}