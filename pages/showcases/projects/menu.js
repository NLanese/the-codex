// React + Next
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

// Recoil
import { useAtom } from "jotai";
import { tokenState, tabBarState, directoryDataState } from "../../../jotai/atoms";

// Styles 
import Styles from "../../../styles/styles";

// Ostrich
import { OstCard } from "../../../OstrichComponents/Format/OstCard";

// Assets
const BoardGameAI = "../../../assets/icons/big/BoardGameWizardIcon.jpeg";
const BetBotImg = "../../../assets/icons/big/BetBot.jpeg";
const DDAImg = "../../../assets/icons/big/DDAImg.jpeg";
const DDScreen = "../../../assets/icons/big/DDScreen.png";
const OstCompImg = "../../../assets/icons/big/OstrichComponentsLogo.png";
const WandererImg = "../../../assets/icons/big/WandererImg.jpeg";
const BudgetBotImg = "../../../assets/icons/big/BudgetBot.jpeg";
const CandyBox3 = "../../../assets/icons/big/CandyBox3.png";
const NR = "../../../assets/icons/big/Nightreign.png";




export default function ProjectsMenu() {

    ///////////
    // State //
    ///////////

      const [directory, setDirectory] = useAtom(directoryDataState)
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
                        router.push("/showcases/projects/boardgame_master_ai")
                        }}
                    >
                        The Board Game Wizard AI
                    </OstCard>
                    <OstCard
                        templateStyle={1}
                        imageSrc={BetBotImg}
                        style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600}}
                        onClick={() => {
                        router.push("/showcases/projects/betbot")
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
                        router.push("/showcases/ostrich-components/showcase")
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
                        style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600, backgroundColor: "#969696"}}
                        // onClick={() => {
                        // router.push("/showcases/projects/boardgameMasterAI")
                        // }}
                    >
                        Dungeon Dash (Unity Project)
                    </OstCard>
                    <OstCard
                        templateStyle={1}
                        imageSrc={WandererImg}
                        style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600, backgroundColor: "#969696"}}
                        // onClick={() => {
                        // router.push("/showcases/projects/betbot")
                        // }}
                    >
                        Wanderer
                    </OstCard>
                    <OstCard
                        templateStyle={1}
                        imageSrc={BudgetBotImg}
                        style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600, backgroundColor: "#969696"}}
                    >
                        Budget Guard (AWS)
                    </OstCard>
                    <OstCard
                        templateStyle={1}
                        imageSrc={CandyBox3}
                        style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600}}
                        onClick={() => {
                        router.push("/showcases/projects/candybox_3")
                        }}
                    >
                        Candy Box 3
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
                        imageSrc={NR}
                        style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600}}
                        onClick={() => {
                        router.push("/showcases/projects/nightreign")
                        }}
                    >
                        Nightreign Build Calculator 
                    </OstCard>
                </div>
            </div>
        </div>
    )
}