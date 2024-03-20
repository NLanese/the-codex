// React
import React, {useEffect, useState} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { tokenState, tabBarState, directoryDataState } from "../../recoil/atoms";

// Constants
import Styles from "../../styles/styles";

// Next JS
import { useRouter } from "next/router";

// Components
import ListPage from "../global/listPage";

export const MenuPage = ({onLessonClick, lessons}) => {

    ///////////
    // State //
    ///////////

   

    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div>
                <div style={Styles.Fonts.h1}>
                    Lessons
                </div>
                <ListPage 
                    items={lessons}
                    onClick={onLessonClick}
                    size="med"
                />
            </div>
        </div>
    )
}