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
const headhsot = "../../assets/aboutMe/headshot.png"




export default function WorksMenu() {

    ///////////
    // State //
    ///////////

      const [directory, setDirectory] = useRecoilState(directoryDataState)
      const router = useRouter()

    ///////////////
    // Constants //
    ///////////////

    const projects = [
        {img: KNM, url: "/showcases/works/kidz-n-motion", name: "Kidz-N-Motion"},
        {img: ieee, url: "/showcases/works/ieee", name: "IEEE (Flagship App)"},
        {img: eventHub, url: "/showcases/works/eventHub", name: "EventHub (IEEE Events App)"}

    ]

    ////////////////
    // UseEffects //
    ////////////////
    
      useEffect(() => {
        setDirectory("Portfolio")            
      }, [])

    ////////////////
    // Renderings //
    ////////////////

      function renderAboutMe(){
        return(
            <div>
                <OstCard 
                templateStyle={3}
                imageSrc={headhsot}
                details={{
                    pictureFlexSize: 5,
                }}
                >
                    <p>
                    Creation has always been a passion of mine. As a child, before I could even properly formulate sentences I could often be found
                    constructing elaborate pathways for my Thomas the Tank Engines, and as I grew that graduated from basic toy trains to legos and magnetic toys.
                    I always loved to build, as one of my favorite Christmas Gifts as a child was a iCoaster, a set a magnetic roller coaster pieces you could 
                    connect in a way to create an endless loop of marbles being lifted up an elevator system, sent down the track and returned back to the elevator. 
                    Immediately, much to my father's shagrin I demanded we create our own unique coaster as oppsoed to following the instructions provided. 
                    </p>

                    <p>
                    Building something often times was not enough for my younger self-- I did not want to just follow a recipe, I wanted to create something
                    unique to me and my expertse; something that had never been made before. That yearning stayed with me my entire life, and even as my passion
                    for physical construction began to wane, I never relented in creating things. It was not long before I discovered just how powerful a tool modern 
                    computing is, and how endless the possibilities for creation are with Software in particular. Once I began taking Computer Science 
                    classes in High School, my path was chosen and there was no forgoing it. 
                    </p>
                    
                </OstCard>
            </div>
        )
      }

      function renderAllProjects(){
        let arrayOfProjectArrays = []
        let i = 0
        if (projects.length > 3){
            while (i < (projects / 3)){
                arrayOfProjectArrays = [...arrayOfProjectArrays, [projects[i], projects[i + 1], projects[i + 2]]]
                i = i + 3
            }
        }
        else{
            arrayOfProjectArrays = [[...projects]]
        }
        return(
            <div style={{marginTop: 20}}>
                <div style={Styles.Fonts.lessonHeaderXL}>Nick Lanese's Professional Works</div>
                {arrayOfProjectArrays.map((arr, i) => {
                    return (renderProjectsRow(arr, i))
                })}
        </div>
        )
      }

      function renderProjectsRow(projectsArray, index){
        return (
            <div key={index} style={{...Styles.Sections.lessonContent, margin: "30px", borderTop: "4px solid #11013b"}}>
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
                        imageSrc={projectsArray[0].img} 
                        style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600}}
                        onClick={() => {
                        router.replace(projectsArray[0].url) 
                        }}
                    >
                        {projectsArray[0].name}
                    </OstCard>
                    <OstCard
                        templateStyle={1}
                        imageSrc={projectsArray[1].img} 
                        style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600}}
                        onClick={() => {
                            router.replace(projectsArray[1].url) 
                        }}
                    >
                        {projectsArray[1].name}
                    </OstCard>
                    <OstCard
                        templateStyle={1}
                        imageSrc={projectsArray[2].img}
                        style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600}}
                        onClick={() => {
                            router.replace(projectsArray[2].url) 
                        }}
                    >
                        {projectsArray[2].name}
                    </OstCard>
                </div>
            </div>
        )
      }


    /////////////////
    // Main Return //
    /////////////////
    return(
        <div>
            <p style={Styles.Fonts.pageTitle}>Nick Lanese's Portfolio</p>
            {renderAboutMe()}
            {renderAllProjects()}
        </div>
    )
}