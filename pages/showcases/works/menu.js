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


// Assets
const KNM = "../../../assets/icons/big/KNM.png";
const eventHub = "../../../assets/icons/big/eventHub.png";
const ieee = "../../../assets/icons/big/ieee.png";




export default function WorksMenu() {

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
            <div style={Styles.Fonts.pageTitle}>Nick Lanese's Professional Works</div>

            <div style={{...Styles.Sections.lessonContent, margin: "30px", borderTop: "4px solid #11013b"}}>
                <div style={{
                    display: 'flex', 
                    flexDirection: 'row',
                    alignContent: 'space-evenly',
                    width: '90%',
                    marginLeft: '5%',
                    height: 300,
                    paddingTop: 20,
                    gap: '10%'
                }}>
                    <OstCard
                        templateStyle={1}
                        imageSrc={KNM}
                        style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600}}
                        onClick={() => {
                        router.replace("/showcases/works/knm")
                        }}
                    >
                        Kidz-N-Motion
                    </OstCard>
                    <OstCard
                        templateStyle={1}
                        imageSrc={ieee}
                        style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600}}
                        onClick={() => {
                        router.replace("/showcases/works/knm")
                        }}
                    >
                        IEEE (Flagship App)
                    </OstCard>
                    <OstCard
                        templateStyle={1}
                        imageSrc={eventHub}
                        style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600}}
                        onClick={() => {
                        router.replace("/showcases/works/knm")
                        }}
                    >
                        EventHub (IEEE Events App)
                    </OstCard>
                </div>
            </div>

            <div style={{...Styles.Sections.lessonContent, margin: "30px", borderTop: "4px solid #11013b"}}>
                <div style={{
                    display: 'flex', 
                    flexDirection: 'row',
                    alignContent: 'space-evenly',
                    width: '90%',
                    marginLeft: '5%',
                    height: 300,
                    gap: 20,
                }}>
                </div>
            </div>
        </div>
    )
}