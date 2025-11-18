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
const knmSite = "../../assets/icons/big/knmSite.png"




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
        {img: KNM, url: "/showcases/works/kidz-n-motion", name: "Kidz-N-Motion App", internal: true},
        {img: knmSite, url: "/showcases/works/kidz-n-motion", name: "Kidz-N-Motion Website", internal: false},
        {img: ieee, url: "/showcases/works/ieee", name: "IEEE (Flagship App)", internal: true},
        {img: eventHub, url: "/showcases/works/eventHub", name: "EventHub (IEEE Events App)", internal: true}

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
                    title: "About Me",
                    titleStyle: Styles.Fonts.lessonHeaderXL,
                    pictureFlexSize: 5,
                }}
                >
                    <div style={{paddingRight: 20, paddingLeft: 20, ...Styles.Fonts.basicX, textAlign: 'left'}}> 
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

                    <p>
                    I vividly remember making my first 'programs' on <a href="https://www.alice.org/get-alice/alice-2/">Alice.</a> For a final project we instructed to make a 
                    simple game. Most classmates created games like tic-tac-toe, or a stationary carnival-game like shooter, where users just pressed 'Space' to fire at targets that moved in and 
                    out of frame. I instead opted to make a more complicated "Call of Duty" clone, with full user interface, movement, and aiming. Enough was never enough for me,
                    when I create something I take extreme pride in it. 
                    </p>

                    <p>
                    Fittingly, I began my professional journey as a software developer hitting the ground in a full sprint. Hired as part of a brand new 2 man team by a Studio that 
                    had never before dipped its toes in the Technology Sector, there was an immense amount of both work and learning needed to be accomplished. The team lead ended up departing from 
                    the company less than three months in which shifted all of his responsibilities on to me. This meant that on my first job ever as a software engineer, I had to 
                    master React Native / Expo as well as learn PostgreSQL and PlanetScale Database hosting on the fly while continuing to build the App, Website, and Database as a satisfactory rate.     
                    </p>

                    <p>
                    From here, when I eventually moved on from the Studio, I kept the remaining client, Kidz-n-Motion and have since then mananaged the production and maintenance of the 
                    Kidz-N-Motion site, App, and Database. While managing these responsibilities, I also began my adventure with IEEE. I was extremely fortunate to land in a 
                    more stable environment following what had been an exceedingly tumultuous work environment. From here I was able to grow and develop even momre as software engineer, 
                    working with a team for the first time in my career and maintaining several much more massive codebases for Apps that are used by millions of people around the world. 
                    </p>
                    </div>
                    
                </OstCard>
            </div>
        )
      }

      function renderAllProjects(){
        let arrayOfProjectArrays = []
        let i = 0
        if (projects.length > 3){
            while (i < (projects.length)){
                arrayOfProjectArrays = 
                    [...arrayOfProjectArrays, 
                        [
                            projects[i], 
                            (i + 1 < projects.length ? projects[i + 1] : null), 
                            (i + 2 < projects.length ? projects[i + 2] : null)
                        ]
                    ]
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
                    {renderOtherCards(projectsArray[0])}
                    {renderOtherCards(projectsArray[1])}
                    {renderOtherCards(projectsArray[2])}
                </div>
            </div>
        )
      }

      function renderOtherCards(itm){
        if (itm === null){
            return (
                <OstCard
                templateStyle={1}
                style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600}}
                >
                </OstCard>
            )

        }
        else{
            return(
                <OstCard
                templateStyle={1}
                imageSrc={itm.img} 
                style={{flex: 3, margin: 5, fontFamily: "Gilroy", fontWeight: 600}}
                onClick={() => {
                    if (itm.internal){
                        router.replace(itm.url) 
                    }
                    else{
                        window.open(itm.url, "_blank", "noopener,noreferrer");
                    }
                }}
                >
                    {itm.name}
                </OstCard>
            )
        }
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