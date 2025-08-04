// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";

import {candyBoxStyles} from "../const/styles"


export default function NewOldsville({

}){

    ///////////////
    // Renderers //
    ///////////////

    function renderOldsVilleSign(){
        return(
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{flexDirection: 'column'}}>
                    <p style={candyBoxStyles.mapStyle}>          |-----*----*-------****------|</p>
                    <p style={candyBoxStyles.mapStyle}>          |     -                __    |</p>
                    <p style={candyBoxStyles.mapStyle}>          | `     New Oldsville    -   |</p>
                    <p style={candyBoxStyles.mapStyle}>          |     -                __    |</p>
                    <p style={candyBoxStyles.mapStyle}>          |---^^^^=-------*-**-----^^--|</p>
                    <p style={candyBoxStyles.mapStyle}>               H                 H     </p>
                    <p style={candyBoxStyles.mapStyle}>               H                 H     </p>
                    <p style={{...candyBoxStyles.mapStyle, marginTop: -7}}>             vVwvw              wVyw     </p>
                </div>
                <div style={{flexDirection: 'column'}}>
                    <p style={candyBoxStyles.mapStyle}>          |-----*----*-------*--*------|</p>
                    <p style={candyBoxStyles.mapStyle}>          |      Population: 56        |</p>
                    <p style={candyBoxStyles.mapStyle}>          |  (give or take a respawn)  |</p>
                    <p style={candyBoxStyles.mapStyle}>          |-----*----*-------*--*------|</p>
                    <p style={candyBoxStyles.mapStyle}>               H                 H     </p>
                    <p style={candyBoxStyles.mapStyle}>               H                 H     </p>
                    <p style={{...candyBoxStyles.mapStyle, marginTop: -7}}>             vVwvw              wVyw     </p>
                </div>
            
            
            </div>
        )
    }

    function renderHouse(){
        return(
            <div>
            <p style={candyBoxStyles.mapStyle}>         ____         </p>
            <p style={candyBoxStyles.mapStyle}>        /    \  ___   </p>
            <p style={candyBoxStyles.mapStyle}>       /      \ | |   </p>
            <p style={candyBoxStyles.mapStyle}>      /        \| |   </p>
            <p style={candyBoxStyles.mapStyle}>     /          \ |   </p>
            <p style={candyBoxStyles.mapStyle}>    /            \|   </p>
            <p style={candyBoxStyles.mapStyle}>   |--------------|   </p>
            <p style={candyBoxStyles.mapStyle}>   |              |    8</p>
            <p style={candyBoxStyles.mapStyle}>   |  []      []  |   888</p>
            <p style={candyBoxStyles.mapStyle}>   |              |  8888</p>
            <p style={candyBoxStyles.mapStyle}>   |      ____    | 888888</p>
            <p style={candyBoxStyles.mapStyle}>   |      |  |    |   ||</p>
            <p style={candyBoxStyles.mapStyle}>   |######| '|####|   ||</p>
            </div>
        )
    }

    function renderLilForest1(){
        return(
            <div>
                <p style={candyBoxStyles.mapStyle}>  888        </p>
                <p style={candyBoxStyles.mapStyle}> 888*8       </p>
                <p style={candyBoxStyles.mapStyle}>8*888*8      </p>
                <p style={candyBoxStyles.mapStyle}>  ||      88*   </p>
                <p style={candyBoxStyles.mapStyle}>  ||     8*88*   </p>
                <p style={candyBoxStyles.mapStyle}>        8*888*8   </p>
                <p style={candyBoxStyles.mapStyle}>          ||   </p>
                <p style={candyBoxStyles.mapStyle}>          ||   </p>
            </div>
        )
    }

    function renderLilForest2(){
        return(
            <div>
                <p style={candyBoxStyles.mapStyle}>      888        </p>
                <p style={candyBoxStyles.mapStyle}>     888*8         </p>
                <p style={candyBoxStyles.mapStyle}>    8*888*8    8   </p>
                <p style={candyBoxStyles.mapStyle}>       ||     &88   </p>
                <p style={candyBoxStyles.mapStyle}>   888 ||    88*8 </p>
                <p style={candyBoxStyles.mapStyle}> *88*88     *88*88</p>
                <p style={candyBoxStyles.mapStyle}> 8*888*8       ||</p>
                <p style={candyBoxStyles.mapStyle}>   ||          ||  </p>
                <p style={candyBoxStyles.mapStyle}>   ||       </p>
            </div>
        )
    }

    return(
        <div style={{...candyBoxStyles.mapStyle, height: '150%', width: '100%', margin: 20}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {renderOldsVilleSign()}
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{display: 'flex', flexDirection: 'column', marginTop: -80}}>
                    {renderLilForest1()}
                    {renderLilForest1()}
                    {renderLilForest2()}
                    {renderLilForest1()}
                </div>
                <div>{renderHouse()}</div>
                <div>{renderHouse()}</div>
            </div>
            
        </div>
    )
}