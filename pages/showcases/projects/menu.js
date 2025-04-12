// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";
import { tokenState, tabBarState, directoryDataState } from "../../../recoil/atoms";

// Styles 
import Styles from "../../../styles/styles";

// Ostrich
import { OstCard } from "../../../OstrichComponents/Format/OstCard";
import { OstrichDropDown } from "../../../OstrichComponents/Dropdown/OstrichDropDown";
import { OstrichTabBar } from "../../../OstrichComponents/Tabs/OstrichTabBar";
import { HeaderBar } from "../../../components/Global/headerBar";

// Assets
const BoardGameAI = "../../../assets/icons/big/BoardGameWizardIcon.jpeg";
const OstCompImg = "../../../assets/icons/big/OstrichComponentsLogo.png";


export default function ProjectsMenu() {

    ///////////
    // State //
    ///////////

      const [directory, setDirectory] = useRecoilState(directoryDataState)
      const router = useRouter()

      ////////////////
      // UseEffects //
      ////////////////
    
      useEffect(() => {
        // setDirectory("Portfolio")            // TO DO
      }, [])

    return(
        <div style={{marginTop: 20}}>
            <div style={Styles.Fonts.pageTitle}>Nick Lanese's Ongoing Projects</div>
            <div style={{...Styles.Sections.lessonContent, margin: "30px"}}>
                <div style={{
                    display: 'flex', 
                    flexDirection: 'row',
                    alignContent: 'space-evenly',
                    width: '90%',
                    marginLeft: '5%',
                    height: 300
                }}>
                    <OstCard
                        templateStyle={1}
                        imageSrc={BoardGameAI}
                        style={{flex: 4, margin: 5}}
                        onClick={() => {
                        router.replace("/showcases/projects/boardgameMasterAI")
                        }}
                    >
                        The Board Game Wizard AI
                    </OstCard>
                    <OstCard
                        templateStyle={1}
                        imageSrc={OstCompImg}
                        style={{flex: 4, margin: 5}}
                        onClick={() => {
                        router.replace("/showcases/projects/boardgameMaster_AI")
                        }}
                    >
                        Current Projects by Nick
                    </OstCard>
                    <OstCard
                        templateStyle={1}
                        imageSrc={OstCompImg}
                        style={{flex: 4, margin: 5}}

                    >
                        Nick's Portfolio
                    </OstCard>
                </div>
            </div>
        </div>
    )
}