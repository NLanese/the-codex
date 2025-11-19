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
const eventHub = "../../../assets/icons/big/eventhub.png";
const ieee = "../../../assets/icons/big/ieee.png";
const headhsot = "../../assets/aboutMe/headshot.png"
const knmSite = "../../assets/icons/big/knmSite.png"

const BoardGameAI = "../../../assets/icons/big/BoardGameWizardIcon.jpeg";
const BetBotImg = "../../../assets/icons/big/BetBot.jpeg";
const DDAImg = "../../../assets/icons/big/DDAImg.jpeg";
const DDScreen = "../../../assets/icons/big/DDScreen.png";
const OstCompImg = "../../../assets/icons/big/OstrichComponentsLogo.png";
const WandererImg = "../../../assets/icons/big/WandererImg.jpeg";
const BudgetBotImg = "../../../assets/icons/big/BudgetBot.jpeg";
const CandyBox3 = "../../../assets/icons/big/CandyBox3.png";




export default function WorksMenu() {

    ///////////
    // State //
    ///////////

      const [directory, setDirectory] = useRecoilState(directoryDataState)
      const router = useRouter()

    ///////////////
    // Constants //
    ///////////////

    const proWorks = [
        {img: KNM, url: "/showcases/works/kidz-n-motion", name: "Kidz-N-Motion App", internal: true},
        {img: knmSite, url: "https://kidz-n-motion.app/", name: "Kidz-N-Motion Website", internal: false},
        {img: ieee, url: "/showcases/works/ieee", name: "IEEE (Flagship App)", internal: true},
        {img: eventHub, url: "/showcases/works/eventhub", name: "EventHub (IEEE Events App)", internal: true}
    ]

    const personalWorks = [
        {img: BoardGameAI, url: "/showcases/projects/boardgame_master_ai", name: "Boardgame Wizard AI", internal: true},
        {img: OstCompImg, url: "/showcases/ostrich-components/menu", name: "Ostrich Components", internal: true},
        {img: BetBotImg, url: "/showcases/projects/betbot", name: "NBA Bet Bot", internal: true},
        {img: CandyBox3, url: "/showcases/projects/candybox_3", name: "CandyBox 3", internal: true}
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
                style={{width: '90%', marginLeft: '5%'}}
                details={{
                    title: "About Me",
                    titleTextStyle: Styles.Fonts.lessonHeaderXL,
                    pictureFlexSize: 5,
                }}
                >
                    <div style={{
                        ...Styles.Fonts.basicX,
                        paddingRight: 20, paddingLeft: 20, 
                        textAlign: 'left', overflowY: 'auto',
                        minHeight: 600, maxHeight: 600,

                        }}> 
                    <p>
                    Creation has always been a passion of mine. As a child, before I could even properly formulate sentences, I could often be found
                    constructing elaborate pathways for my Thomas the Tank Engines. As I grew, that graduated from basic toy trains to Legos and magnetic toys.
                    I always loved to build; one of my favorite Christmas gifts as a child was an iCoaster, a set of magnetic roller coaster pieces you could 
                    connect to create an endless loop of marbles being lifted up an elevator system, sent down the track, and returned back to the elevator. 
                    Immediately, much to my father's chagrin, I insisted we create our own unique coaster instead of following the instructions provided. 
                    </p>

                    <p>
                    Building something was often not enough for my younger self. I did not want to simply follow a recipe; I wanted to create something
                    uniquely mine, something shaped by my own imagination and expertise. That yearning stayed with me throughout my life, and even as my passion
                    for physical construction began to fade, I never relented in creating things. It wasn’t long before I discovered just how powerful a tool modern 
                    computing is, and how endless the possibilities for creation are with software in particular. Once I began taking Computer Science 
                    classes in high school, my path was chosen, and there was no turning back. 
                    </p>

                    <p>
                    I vividly remember making my first “programs” on <a href="https://www.alice.org/get-alice/alice-2/">Alice.</a> For a final project we were instructed to build a 
                    simple game. Most classmates created things like tic-tac-toe or a stationary carnival-style shooting game, where users simply pressed “Space” to fire at moving targets. 
                    I instead attempted a more complicated “Call of Duty”–style clone, complete with a user interface, movement, and aiming. Enough was never enough for me;
                    when I create something, I take extreme pride in it. 
                    </p>

                    <p>
                    Fittingly, I began my professional journey as a software developer in a full sprint. I was hired as part of a brand-new two-man team by a studio that 
                    had never before dipped its toes into the technology sector, so there was an immense amount of both work and learning to take on. Less than three months in, 
                    the team lead departed the company, shifting all of his responsibilities onto me. This meant that on my first job as a software engineer, I had to 
                    master React Native / Expo and learn PostgreSQL and PlanetScale database hosting on the fly — all while continuing to build the app, website, and database at a satisfactory pace.     
                    </p>

                    <p>
                    When I eventually moved on from the studio, I kept the remaining client, Kidz-n-Motion, and have since managed the production and maintenance of the 
                    Kidz-n-Motion site, app, and database. While handling those responsibilities, I also began my journey with IEEE. I was extremely fortunate to land in a 
                    far more stable environment after what had been an exceedingly tumultuous early work experience. There I was able to grow and develop even further as a software engineer, 
                    working with a team for the first time in my career and maintaining several significantly larger codebases for apps used by millions of people around the world. 
                    </p>

                    </div>
                    
                </OstCard>
            </div>
        )
      }

      function renderProjects(projects){
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
            <div style={{marginTop: 0}}>
                {arrayOfProjectArrays.map((arr, i) => {
                    return (renderProjectsRow(arr, i))
                })}
        </div>
        )
      }

      function renderProjectsRow(projectsArray, index){
        return (
            <div key={index} style={{...Styles.Sections.lessonContent, margin: "30px", paddingBottom: 30, borderBottom: "4px solid #11013b"}}>
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
                        router.push(itm.url) 
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
        <div style={{marginLeft: '5%', width: '90%'}}>
            <p style={Styles.Fonts.pageTitle}>Nick Lanese's Portfolio</p>
            {renderAboutMe()}
            <div style={Styles.Fonts.lessonHeaderXL}>Nick Lanese's Professional Works</div>
            {renderProjects(proWorks)}
            <div style={Styles.Fonts.lessonHeaderXL}>Nick Lanese's Personal Projects</div>
            {renderProjects(personalWorks)}
        </div>
    )
}