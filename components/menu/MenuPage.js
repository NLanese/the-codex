// React
import React, {useEffect, useState} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { tokenState, tabBarState, directoryDataState } from "../../recoil/atoms";

// Constants
import Styles from "../../styles/styles";
import Colors from "../../styles/colors";

// Next JS
import { useRouter } from "next/router";

// Components
import ListPage from "../global/listPage";

export const MenuPage = ({onLessonClick, lessons}) => {

    ///////////
    // State //
    ///////////


    ////////////////
    // Renderings //
    ////////////////

    function renderLessonsList(){
        return(
            <div style={{ 
                marginTop: 45, marginRight: 15,
                padding: 15,
                justifyContent: 'center', 
                backgroundColor: Colors.offWhite, 
                boxShadow:'-2px -2px -1px -1px rgba(-1, -1, -1, 0.1)'
            }}>
                <div style={{...Styles.Fonts.h1, textAlign: 'center'}}>
                    Lessons
                </div>
                <ListPage 
                    items={lessons}
                    onClick={onLessonClick}
                    size="sm"
                />
            </div>
        )
    }
   

    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div>
                {renderLessonsList()}
            </div>
        </div>
    )
}