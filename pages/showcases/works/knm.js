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
const listing = "../../../assets/showcase_images/knm/AppListing.png";
const chiScreen = "../../../assets/showcase_images/knm/chiScreen.png";
const parScreen = "../../../assets/showcase_images/knm/parScreen.png";
const therScreen = "../../../assets/showcase_images/knm/therScreen.png";



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
                        This allows parents to see how their child progresses along their Physial Therapy journey. 
                    </p>
                </div>
            )
        }

        function renderAppListing(){
            return(
                <div style={{flexDirection: 'row', display: 'flex', padding: 20}}>
                    <div style={{flex: 6}}>
                        <OstCard
                            templateStyle={1}
                            imageSrc={listing}
                        >
                            <a href="https://apps.apple.com/us/app/kidz-n-motion/id1661352847">iOS Listing</a> / <a href="">Android Listing</a>
                        </OstCard>
                    </div>
                    <div style={{flex: 6, padding: 20, paddingTop: 0}}>
                        <p style={Styles.Fonts.basicX}>
                            Released to App Stores (iOS and Google Play) in 2021, the Kidz-N-Motion app has many users, 
                            therapists and clients and their parents alike. Created using React Native (Vanilla) and up to date 
                            with modern SKDs, APIs, and compliances; I have been the sole architect of the Kidz-N-Motion app, overseeing 
                            its production, development, and publication. I am also in charge of both the Google Play and Apple 
                            Developer Accounts. 
                        </p>
                        <p style={Styles.Fonts.basicX}>
                            This was my very first professional endaever as a computer scientist, and as such it came with its fair share 
                            of issues and complications. For example, this application was my first forray into Gradle Build Errors on Android's side 
                            and Pod issues on Apple's side. Having no senior member to turn to-- as well as no chatbot assistants yet to asisst me; 
                            I was able to solve all compatability issues and always managed to successfully build and distribute the app. 
                        </p>
                    </div>
                </div>
            )
        }

        const[card1, setCard1] = useState(false)
        const[card2, setCard2] = useState(false)
        const[card3, setCard3] = useState(false)
        const cardStyle = (flipped) => {
            return(
                {
                    flex: 4,
                    transformStyle: "preserve-3d",
                    transition: "transform 0.6s",
                    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    height: 600
                }
            )
            
        }
        function renderAccountTypes(){
            const renderCardOne = () =>{
                if (!card1){
                    return(
                        <OstCard
                        templateStyle={1}
                        imageSrc={chiScreen}
                        onClick={() => setCard1(!card1)}
                        style={cardStyle(card1)}
                        >
                        </OstCard>
                    )
                }
                else{
                    return(
                        <OstCard
                        onClick={() => setCard1(!card1)}
                        style={cardStyle(card1)}
                        >
                            <div>
                                <div style={{...Styles.Fonts.lessonHeader, backgroundColor: 'orange'}}>Child Account</div>
                                <p style={Styles.Fonts.basic}>
                                    Children have pretty minimal functionality in order to maintain simplicity and prevent 
                                    the Children from getting lost within the app. 
                                </p>
                                <p style={Styles.Fonts.basic}>
                                    They are able to watch and complete workout videos only when their Physical Therapist has assigned it 
                                    to them. This prevents the child from attempting an exercise they may not be ready for. Upon completion
                                    of the 1 minute video, the child is asked 3 question. 
                                </p>
                                <ol>
                                    <li style={Styles.Fonts.basic}>Were you able to complete the workout without help from a parent</li>
                                    <li style={Styles.Fonts.basic}>Were you able to complete the workout without leaning on something for support</li>
                                    <li style={Styles.Fonts.basic}>How long were you able to complete the video for the full minute, at least 30 seconds, or less than 30 seconds</li>
                                </ol>
                                <p style={Styles.Fonts.basic}>
                                    Depending on these answers, the child is awarded one of three medals-- Gold, Silver, or Bronze. 
                                </p>
                                <p style={Styles.Fonts.basic}>
                                    Finally, the Child is also able to check their calendar which indicates when assignments are due or when appointments are scheduled. 
                                </p>
                            </div>
                        </OstCard>
                    )
                }
            }
            const renderCardTwo = () => {
                if (!card2){
                    return(
                        <OstCard
                            templateStyle={1}
                            imageSrc={therScreen}
                            onClick={() => setCard2(!card2)}
                            style={cardStyle(card2)}
                        >
                        </OstCard>
                    )
                }
                else{
                    return(
                        <OstCard
                        onClick={() => setCard2(!card2)}
                        style={cardStyle(card2)}
                        >
                            <div>
                                <div style={{...Styles.Fonts.lessonHeader, backgroundColor: 'fuchsia'}}>Therapist Account</div>
                                <p style={Styles.Fonts.basic}>
                                    Therapists have the most functionality out of the three account type. A therapist can create or approve 
                                    appointments, meetings, and workout assignments for their clients. 
                                </p>
                                <p style={Styles.Fonts.basic}>
                                    Just like the Parent and the Child Accounts, the Therapist is able to check their calendar and see all
                                    assignment start / end dates, as well as all appointment dates and times. 
                                </p>
                                <p style={Styles.Fonts.basic}>
                                    Similarly to the parent, the Physical Therpist has the ability to send a recieve messages. This is limitied to 
                                    parent accounts, as for obvious reasons we did not want to facilitate communication between and adult and a child. 
                                </p>
                                <p style={Styles.Fonts.basic}>
                                    Finally, the Therapist is able to send invites to porespective clients from in the app. Through the 'invite clients' 
                                    option, Therapists need to just enter in the email address of the individual they want to invite, along with some 
                                    other basic information such as names and the child's motor function level. Upon the accecpting of that
                                    invite, an account for the Guardian and their child is automatically created with temporary passwords. 
                                </p>
                            </div>
                        </OstCard>
                    )
                }
            }
            const renderCardThree = () => {
                if (!card3){
                    return(
                        <OstCard
                            templateStyle={1}
                            imageSrc={parScreen}
                            onClick={() => setCard3(!card3)}
                            style={cardStyle(card3)}
                        >
                        </OstCard>
                    )
                }
                else{
                    return(
                        <OstCard
                        onClick={() => setCard3(!card3)}
                        style={cardStyle(card3)}
                        >
                            <div>
                                <div style={{...Styles.Fonts.lessonHeader, backgroundColor: 'orange'}}>Parent Account</div>
                                <p style={Styles.Fonts.basic}>
                                    Parents have all the functionality that Children do, as well as some more functionality. The first of which is 
                                    the ability to switch between which 'child' is currently active. 
                                </p>
                                <p style={Styles.Fonts.basic}>
                                    Videos can also be watched on the parent's account and as previously mentioned, whichever child is 'active' will be
                                    the one who is awarded the medals for a video's completion. 
                                </p>
                                <p style={Styles.Fonts.basic}>
                                    Again like the child, the Parent is also able to check their calendar which indicates when assignments are due or when 
                                    appointments are scheduled. They may also choose a specific date to request an appointment for. Once a request for an 
                                    appointment is made, the Physcal Therapist will get an email and push notification and can confirm or deny it.
                                </p>
                                <p>
                                    Parents can also switch to child mode and hand the phone off to their child if the child does not have a device of 
                                    his or her own. When trying to switch back to the parent account from a child account, a password will need to be entered. 
                                </p>
                            </div>
                        </OstCard>
                    )
                }
            }
            return(
                <div>
                    <p style={Styles.Fonts.basicX}>
                        As previously mentioned there are three different expected user types for this app. Clients (Children needing Physical Therapy), Parents, and Therapist / Administrators. 
                        Each user type will have a different in-app experience, as they each come to the app with a different purpose in mind. 
                    </p>
                    <p style={Styles.Fonts.basicX}>
                        <strong>Click on each card to learn more about the different account types and different functionalities available to them</strong>
                    </p>
                    <div style={{flexDirection: 'row', display: 'flex', padding: 20, gap: 40}}>
                        {renderCardOne()}
                        {renderCardTwo()}
                        {renderCardThree()}
                    </div>
                </div>
            )
        }

    /////////////////
    // Main Return //
    /////////////////

    return(
        <div style={{backgroundColor: 'orange',  height: '100%', marginTop: -20}}>
            <div style={{marginLeft: '15%', marginRight:'15%', height: '100%', backgroundColor: 'white'}}>
                <div style={{...Styles.Sections.lessonContent, paddingTop: 35}}>
                    <div style={{...Styles.Fonts.lessonHeader}}>Kidz-N-Motion</div>
                        {renderInitialRambling()}
                    <div style={{...Styles.Fonts.lessonHeader}}>Distribution</div>
                        {renderAppListing()}
                    <div style={{...Styles.Fonts.lessonHeader}}>Account Types</div>
                        {renderAccountTypes()}
                </div>
            </div>
        </div>
    )
}