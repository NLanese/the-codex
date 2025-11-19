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
const eh = "../../../assets/showcase_images/ieee/eventhub.png";
const ehal = "../../../assets/showcase_images/ieee/eventhub-attendee-list-1.png";
const ehal2 = "../../../assets/showcase_images/ieee/eventhub-attendee-list-2.png";
const cordcap = "../../../assets/showcase_images/ieee/cord-to-cap.png";
const selectEv = "../../../assets/showcase_images/ieee/selectEvent.png";

const safeEhal = "../../../assets/showcase_images/ieee/safeAttendee.png";
const safeSel = "../../../assets/showcase_images/ieee/safeSelect.png";
const ehNotesLanding = "../../../assets/showcase_images/ieee/ehNotesLanding.png";
const ehNotesTaked = "../../../assets/showcase_images/ieee/ehNotesTaked.png";
const ehNotesTaken = "../../../assets/showcase_images/ieee/ehNotesTaken.png";








export default function EventHubPage(){

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


        // First Paragraph
        function renderInitialRambling(){
            return(
                <div style={{paddingTop: 20}}>
                    <p style={Styles.Fonts.basicX}>
                        IEEE hosts up to thousands of events a year, and as such each event will be unable to have its own app on the 
                        App Stores, whether Google or Apple. As such, a single application was made to host all IEEE Events, Conferences, and Official Meetings.
                    </p>
                    <p style={Styles.Fonts.basicX}>
                        IEEE initially had every Event HHoster create its own app-- this was eventaully caught and declined by Apple, with the threat that future independant apps for 
                        events would be barred from submission. As a result, the EventHub app was made, and within it all IEEE sponsored events were made accessible.
                    </p>
                    <p style={Styles.Fonts.basicX}>
                        Whereas each event composer (IEEE ComSoc, IEEE Womens Society, etc) used to have their own indivials apps, all event organizers are
                        now resided in the IEEE Eventhub App. From here, users can check other attendees' as well as speakers' profiles; check out maps of the event grounds, 
                        create your own schedule for the event that connects to your phone's calendar, and find out even more details pertaining to the event selected. 
                    </p>
                </div>
            )
        }

        // Second Part ( Distribution )
        function renderAppListing(){
            return(
                <div style={{flexDirection: 'row', display: 'flex', padding: 20, alignItems: 'stretch'}}>
                    <div style={{display: 'flex', flex: 6, flexDirection: 'column', justifyContent: 'space-evenly', gap: 50}}>
                        <OstCard
                            templateStyle={1}
                            imageSrc={eh}
                        >
                            <a href={"https://apps.apple.com/us/app/ieee-eventhub/id1456133827"}>iOS Listing</a> / <a href="">Android Listing</a>
                        </OstCard>
                        <OstCard
                            templateStyle={1}
                            imageSrc={cordcap}
                        >
                        </OstCard>
                    </div>
                    <div style={{flex: 6, padding: 20, paddingTop: 0}}>
                        <p style={Styles.Fonts.basicX}>
                            Since my employment at IEEE in 2021, I resumed the responsibilites left by the employee before me in building and 
                            adding the Event Hub app to the Google Play Console. When I had first started, the App wazs built using Angular / Cordova 
                            with some Capacitor packages hewn in. Since then, I have converted the App to work on the much more modern Capacitor Engine
                            opposed to the now deprecated Cordova. 
                        </p>
                        <p style={Styles.Fonts.basicX}>
                            Starting in 2023, relying on the Cordova Engine became impossible, as mutliple @ionic-native dependencies became incompatible with modern
                            Android and iOS SDKs. @ionic-native packages relied on old Cordova and were incompatible with Cordova-Capacitor hybrid engines. I had removed 
                            the trouble packages and replaced them with their @capacitor or @awesome-cordova packages (which were comnpatible with the Cordova-Capacitor engine)
                            and made the appropriate syntactical adjustments in the files with replaced package imports. 
                        </p>
                        <p style={Styles.Fonts.basicX}>
                            Then in Spring 2024, more issues arose from older dependencies, causing me to update entirely to Capacitor. This meant we no longer used 
                            `cordova` build commands and instead switched to `capacitor` commands. TypeScript was upgraded to adjust for this, as were several different analytics 
                            packages we used. The cordova configuration files were exchanged for Capacitor ones, and the tsconfig file was updated. 
                        </p>
                        <p style={Styles.Fonts.basicX}>
                            Finally, I lead the efforts on making sure the Event Hub app was compatible with Android 35, as Google Play is making all Apps relying on
                            Android 34 and below deprecated and unable to be published as of November 2025. 
                        </p>
                    </div>
                </div>
            )
        }

        // Third Part ( Account Types )
        const[card1, setCard1] = useState(false)
        const[card2, setCard2] = useState(false)
        const cardStyle = (flipped) => {
            return(
                {
                    flex: 3,
                    transformStyle: "preserve-3d",
                    transition: "transform 0.6s",
                    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    height: 800,
                    marginLeft: 0, marginRight: 0
                }
            )
            
        }
        function renderAttendeeList(){
            const renderCardOne = () =>{
                if (!card1){
                    return(
                        <OstCard
                        templateStyle={1}
                        imageSrc={ehal}
                        onClick={() => setCard1(!card1)}
                        style={cardStyle(card1)}
                        >
                            Click to learn more about the Alphabet List
                        </OstCard>
                    )
                }
                else{
                    return(
                        <OstCard
                        onClick={() => setCard1(!card1)}
                        style={cardStyle(card1)}
                        >
                            <div style={{...Styles.Fonts.lessonHeader, backgroundColor: '#00629B', color: "white"}}>Alphabet List</div>
                            <div style={{overflow: 'scroll', height: '90%', padding: 15}}>
                                
                                <p style={Styles.Fonts.basic}>
                                    This is one of the first major UI Changes I was responsible for at IEEE, and is also one of my 
                                    favorite features added-- not only because of how it came out, but the challenges it provided in implementation 
                                    well!
                                </p>
                                <p style={Styles.Fonts.basic}>
                                    Functionally, this feature intends to accomplish three main goals
                                </p>
                                <ol>
                                    <li style={Styles.Fonts.basic}>Users can click a letter in the side bar and the page will navigate to the first user whose last name begins with that letter</li>
                                    <li style={Styles.Fonts.basic}>As users scroll down the list of names, the side bar updates to track which letter group is currently displayed</li>
                                    <li style={Styles.Fonts.basic}>Only letters that have users with a last name beginning with that letter are shown. This means to say if no last names begin with X, then X is not shown</li>
                                </ol>
                                <p style={Styles.Fonts.basic}>
                                    The first part was relatively simple. I order the array of users alphabetically and I create an obejct that mirrors where each new letter
                                    appears in the beginning of someone's last name. A list that has a user with a last name beginning with A for example would have an objecty with key "A"
                                    and value 0, showing that the first appearance of a last name with letter A begins at index of 0. If the first last name beginning with B occurred at the 6th element,
                                    then the object would have key B with value 6. 
                                </p>
                                <p style={Styles.Fonts.basic}>
                                    Next, we tracked the height of each list item. Using Angular's Element property, we can extract the height (in px) of each user item in the list. 
                                    From here, we can determine that if B last names being at the 6th item, and each item is 50 px tall, then when the user scrolls 60 px, the Aphabet list updates
                                    to show B is the currently shown letter group. Similarly, if "L" begins at the 100th element, clicking L on the Alphabet Bar would scroll the page to 5000px down. 
                                </p>
                                <p style={Styles.Fonts.basic}>
                                    There was the addiitonal issue of dealing with Angular's infinite lists. A great tool to optimize page loading and reduce 
                                    over rendering; infinite lists CAN cause some developmental issues when trying to implement features that involve instantly loading 
                                    an item that is several load groups away. I dealt with this similarly to the scrolling issue, as I tracked the index of the last element loaded 
                                    and was able to determine how many more load groups needed to be added to the infinite list in order to load the desired element.
                                </p>
                                <p style={Styles.Fonts.basic}>
                                    This means to say, if the first name beginning with Z was the 2000th element, each load group was 50 items, and the user has not added any new load groups 
                                    (meaning they haven't scrolled down to the bottom of the list yet) that means the last loade index would be 50. Since 2000 - 50 is 1950, that means we need 
                                    to load 1950 more users, or 39 more load groups. As such, before scrolling down the needed amount of pixels, 39 more load groups worth of users would be added
                                    to the list, and the screen would then be able to scroll down to that 2000th item.
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
                            imageSrc={ehal2}
                            onClick={() => setCard2(!card2)}
                            style={cardStyle(card2)}
                        >
                            Click to learn more about the Attendee Cards
                        </OstCard>
                    )
                }
                else{
                    return(
                        <OstCard
                        onClick={() => setCard2(!card2)}
                        style={cardStyle(card2)}
                        >
                            <div style={{...Styles.Fonts.lessonHeader, backgroundColor: '#00629B', color: "white"}}>Atttendee Item Cards</div>
                            <div style={{overflow: 'scroll', height: '90%', padding: 15}}>
                                <p style={Styles.Fonts.basic}>
                                    A much simpler undertaking that the creation of the Alphabet list, these attendee cards also provided their own set of challenges. 
                                </p>
                                <p style={Styles.Fonts.basic}>
                                    Before getting into the weeds on the details, lets go over what is expected from these title cards...
                                </p>
                                <ol>
                                    <li style={Styles.Fonts.basic}>Users can click an attendee item and the item expands into a full card</li>
                                    <li style={Styles.Fonts.basic}>When the item expands into the card, the scroll tracking for the letter list cannot be interfered with</li>
                                    <li style={Styles.Fonts.basic}>If the selected user has their social medias enabled and listed, users should be able to click on the socials and go to the user's page, either through the social emdia app if installed or an In-App Browser if not</li>
                                    <li style={Styles.Fonts.basic}>Only one Attendee Card can be opened at a time</li>
                                </ol>
                                <p style={Styles.Fonts.basic}>
                                    The first expected behavior was pretty straight-forward. Every attendee item was converted to a clickable element. 
                                    If the item is clicked, a state variable 'selectedAttendee' is set to equal the attendee clicked. When the list is rendered,
                                    if the rendered attendee is equal to the selectedAttendee, rather than rendering a regular attendee item it will render the 
                                    expanded attendee card. This assures only one is 'opened' at a time as well.
                                </p>
                                <p style={Styles.Fonts.basic}>
                                    Similarly, I implemented a 'scrollOffset' that takes the difference in height between the attendee item and the now
                                    expanded attendee card. This number goes into the scroll calculations to make sure the Alphabet Bar on the side of the screen is 
                                    not negatively effected by the expanded attendee card.
                                </p>
                            </div>
                        </OstCard>
                    )
                }
            }
            return(
                <div>
                    <p style={Styles.Fonts.basicX}>
                        As previously mentioned the EventHub App features the ability to find and connect with other event attendees. I have worked
                        quite a bit with this features and features adjacent to this. One of the earliest contributions in this regard was the addition of 
                        the iOS contacts list style Alphabet Slider. I then worked on the appearance of the individual atendee cards, as well as the navigation that
                        occurs when users click on an attendee's social medias. 
                    </p>
                    <p style={Styles.Fonts.basicX}>
                        <strong>Click on each card to learn more about the different account types and different functionalities available to them</strong>
                    </p>
                    <div style={{flexDirection: 'row', display: 'flex', padding: 20, gap: 70}}>
                        {renderCardOne()}
                        {renderCardTwo()}
                    </div>
                    <p style={Styles.Fonts.basicX}>
                        Additionally, all users have the functionality to press the magnify icon in the top right of the screen to search for any individual user.
                        I refined this search so that it searches both first and last name as opposed to just a 'firstName + lastName' string search. Specifically, my 
                        additions made it so that typing "Mann" or "Stan" would both bring up "Stanley Mann", as opposed to just "Stan" in the previous iteration.
                    </p>
                </div>
            )
        }

        // Fourth Part ( Calendar )
        function renderAddingEvents(){
            return(
            <div>
                <div style={{flexDirection: 'row', display: 'flex', padding: 20}}>
                    <div style={{flex: 4}}>
                        <OstCard
                            templateStyle={1}
                            imageSrc={selectEv}
                            style={{height: 700}}
                        >
                        </OstCard>
                    </div>
                    <div style={{flex: 8, padding: 20, paddingTop: 0}}>
                        <p style={Styles.Fonts.basicX}>
                            As previously covered, the Event Hub app will host events from a variety of different providers. On the screen to the left, you will see some of the Sponsored IEEE Groups. 
                        </p>
                        <p style={Styles.Fonts.basicX}>
                            Every event Provider has is own listing in a JSON object stored within an IEEE S3 Bucket. When new providers begin working with the EventHub App, either myself or another cohort are responsibile for 
                            adding said provider and its details to the aforementioned JSON. From here, when a User begins the app, the app pings that S3 to find which providers it should search for and what data it should use. 
                            From there, an API request is sent to an IEEE Wordpress Website where all the Providers upload their Event information. This information is scraped and returned to the Eventhub app 
                            for the user. 
                        </p>
                        <p style={Styles.Fonts.basicX}>
                            I personally added a few of the IEEE Providers now on the app into the JSON and reupolaoded to S3. Furthermore, I was involved with nearly
                            every change in both the app, the JSON Object, and the aforementioned API when changes were made to the Event Structure, such as the addition of 
                            eventFormatType and some changes made to EventStartDate and eventEndDate to include time in addition to just date.
                        </p>
                    </div>
                </div>
            </div>
            )
        }

        // Fifth Part Account Structure
        function renderSafeArea(){
            return(
                <div style={{paddingTop: 20}}>
                    <p style={Styles.Fonts.basicX}>
                       As you may have seen in some of the screen shots above, there is an overlap between the upper UI of Android phones and the 
                       top sections of our app page. We were unsure whether it was the angular upgrade during the move to higher Android SDKs or 
                       some other upgrade, but we seemed to have lost the use of the safe area package we were using. I fixed this, greatly enhancing User 
                       Experience on newer Android devices running Android OS 15+
                    </p>
                    <div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '70%', marginLeft: '15%'}}>
                            <OstCard
                            templateStyle={1}
                            imageSrc={safeSel}
                            style={{height: 600, width: 300, padding: 5}}
                            >
                            </OstCard>
                            <OstCard
                            templateStyle={1}
                            imageSrc={safeEhal}
                            style={{height: 600, width: 300, padding: 5}}
                            >
                            </OstCard>
                        </div>
                    </div>

                </div>
            )
        }

        // Fifth Part Account Structure
        function renderTakeNotes(){
            return(
                <div style={{paddingTop: 20}}>
                    <p style={Styles.Fonts.basicX}>
                        One of the very first contributions I had to the EventHub App was the cleaning and resotring of the 
                        Notes Taking Feature. This would allow users to take notes for specific events, where the notes would then 
                        be saved upon reentering the event on the app. When I came to IEEE, this feature was not working as anticipated as 
                        notes did not properly save nor did they properly connect to the event they were composed for. 
                    </p>
                    <div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '70%', marginLeft: '15%'}}>
                            <OstCard
                            templateStyle={1}
                            imageSrc={ehNotesLanding}
                            style={{height: 600, width: 300, padding: 5}}
                            >
                            </OstCard>
                            <OstCard
                            templateStyle={1}
                            imageSrc={ehNotesTaken}
                            style={{height: 600, width: 300, padding: 5}}
                            >
                            </OstCard>
                            <OstCard
                            templateStyle={1}
                            imageSrc={ehNotesTaked}
                            style={{height: 600, width: 300, padding: 5}}
                            >
                            </OstCard>
                        </div>
                    </div>

                </div>
            )
        }

    /////////////////
    // Main Return //
    /////////////////

    return(
        <div style={{backgroundColor: '#00629B',  height: '100%', marginTop: -20}}>
            <div style={{marginLeft: '10%', marginRight:'10%', height: '100%', backgroundColor: 'white'}}>
                <div style={{...Styles.Sections.lessonContent, paddingTop: 35}}>
                <div style={{...Styles.Fonts.lessonHeader, paddingTop: 10}}>IEEE EventHub</div>
                        {renderInitialRambling()}
                    <div style={{...Styles.Fonts.lessonHeader, paddingTop: 30}}>My Contributions to Distribution</div>
                        {renderAppListing()}
                    <div style={{...Styles.Fonts.lessonHeader, paddingTop: 30}}>My Contributions to Attendee List</div>
                        {renderAttendeeList()}
                    <div style={{...Styles.Fonts.lessonHeader, paddingTop: 30}}>Adding New Events</div>
                        {renderAddingEvents()}
                    <div style={{...Styles.Fonts.lessonHeader, paddingTop: 30}}>Implementing a Safe Area</div>
                        {renderSafeArea()}
                    <div style={{...Styles.Fonts.lessonHeader, paddingTop: 30}}>Taking Notes</div>
                        {renderTakeNotes()}
                </div>
            </div>
        </div>
    )
}