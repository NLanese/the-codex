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
const BetBotImg = "../../../assets/icons/big/BetBot.jpeg";
const DDAImg = "../../../assets/icons/big/DDAImg.jpeg";
const DDScreen = "../../../assets/icons/big/DDScreen.png";
const OstCompImg = "../../../assets/icons/big/OstrichComponentsLogo.png";
const WandererImg = "../../../assets/icons/big/WandererImg.jpeg";


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
        setDirectory("Portfolio")            
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
                    height: 300,
                    gap: 20
                }}>
                    <OstCard
                        templateStyle={1}
                        imageSrc={BoardGameAI}
                        style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600}}
                        onClick={() => {
                        router.replace("/showcases/projects/boardgameMasterAI")
                        }}
                    >
                        The Board Game Wizard AI
                    </OstCard>
                    <OstCard
                        templateStyle={1}
                        imageSrc={BetBotImg}
                        style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600}}
                        onClick={() => {
                        router.replace("/showcases/projects/betbot")
                        }}
                    >
                        NBA BetBot AI
                    </OstCard>
                    <OstCard
                        templateStyle={1}
                        imageSrc={DDAImg}
                        style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600, backgroundColor: "#969696"}}
                    >
                        Dungeons, Dragons, and AI
                    </OstCard>
                    <OstCard
                        templateStyle={1}
                        imageSrc={OstCompImg}
                        style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600}}
                        onClick={() => {
                        router.replace("/showcases/ostrich-components/showcase")
                        }}
                    >
                        The Ostrich Component Library 
                    </OstCard>
                </div>
            </div>

            <div style={{...Styles.Sections.lessonContent, margin: "30px", borderTop: "4px solid #11013b", paddingTop: 30}}>
                <div style={{
                    display: 'flex', 
                    flexDirection: 'row',
                    alignContent: 'space-evenly',
                    width: '90%',
                    marginLeft: '5%',
                    height: 300,
                    gap: 20
                }}>
                    <OstCard
                        templateStyle={1}
                        imageSrc={DDScreen}
                        style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600}}
                        onClick={() => {
                        router.replace("/showcases/projects/boardgameMasterAI")
                        }}
                    >
                        Dungeon Dash (Unity Project)
                    </OstCard>
                    <OstCard
                        templateStyle={1}
                        imageSrc={WandererImg}
                        style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600, backgroundColor: "#969696"}}
                        // onClick={() => {
                        // router.replace("/showcases/projects/betbot")
                        // }}
                    >
                        Wanderer
                    </OstCard>
                    <OstCard
                        templateStyle={1}
                        imageSrc={"moop"}
                        style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600, backgroundColor: "#969696"}}
                    >
                        To Be Announced
                    </OstCard>
                    <OstCard
                        templateStyle={1}
                        imageSrc={"moop"}
                        style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600, backgroundColor: "#969696"}}
                    >
                        To Be Announced
                    </OstCard>
                </div>
            </div>
        </div>
    )
}