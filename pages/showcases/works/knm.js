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


export default function KNMPage(){

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

    ////////////////
    // Renderings //
    ////////////////

        function renderInitialRambling(){
            return(
                <div style={{paddingTop: 20}}>
                    <p style={Styles.Fonts.basicX}>
                        The Flaghship app for Therapy in Motion PA, the Kidz-N-Motion app is designed to 
                        connect children facing disabilities to their own professional Physical Therapist.
                    </p>
                    <p style={Styles.Fonts.basicX}>
                        Founded by <a href="https://www.linkedin.com/in/dr-lafonda-beneby-pt-dpt-982255134/">Dr Lafonda Benelby</a>, Kidz-N-Motion was created during covid, as Dr LaFonda and her 
                        in-school Physial Therapist peers found themselves unable to give their clients the critical 
                        services they needed. While relaying instructions for exercises and other activities to parents
                        was possible, there existed no way to <strong>show</strong> the children the exercises they should 
                        be doing, nor was there way way to actually confirm whether the activities were completed.
                    </p>
                    <p style={Styles.Fonts.basicX}>
                        In order to reconect with children who desperately needed her and her peers' assistance, Dr LaFonda 
                        founded Therapy In Motion and began the creation of her Kidz-N-Motion app. This app allows clients and their 
                        parents to be able to reach their Physical Therapists at the click of a button through in-app instant messaging. 
                        Therapists can assign work outs to their clients, and each work out comes with its own pre-rendered animation 
                        of a child doing the exercise in order for the client to follow along. Therapists can also record the client 
                        during in-person sessions and is able to easily send the videos over to the parent through the app's record feature.
                        This allows parents to see how their child progresses along their Physial therapy journey. 
                    </p>
                </div>
            )
        }

    /////////////////
    // Main Return //
    /////////////////

    return(
        <div style={{backgroundColor: 'orange',  height: '100vh', marginTop: -20}}>
            <div style={{marginLeft: '15%', marginRight:'15%', height: '100%', backgroundColor: 'white'}}>
                <div style={{...Styles.Sections.lessonContent, paddingTop: 35}}>
                    <div style={{...Styles.Fonts.lessonHeader}}>Kidz-N-Motion</div>
                        {renderInitialRambling()}
                </div>
            </div>
        </div>
    )
}