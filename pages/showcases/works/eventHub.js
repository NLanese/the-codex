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




            //////////
            // Main //
            //////////
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
                        Additionally, all users have the functionality to personalize their experience. We have a wide variety of color palletes for the app 
                        that will allow users even with color blindness to find a palette that works for them and is visible in for their specific type of color
                        blindness. 
                    </p>
                    <p style={Styles.Fonts.basicX}>
                        Users can also change their profile Avatar (seen in the top right of each screen) and have a 'change password' email sent to them if 
                        they desire a new password. Similarly, if they forgot their password they can request a temporary by entering their email, where a 
                        a link will be provided that redirects users to the site where they can change thier password. .
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
                            imageSrc={""}
                            style={{height: 700}}
                        >
                        </OstCard>
                    </div>
                    <div style={{flex: 8, padding: 20, paddingTop: 0}}>
                        <p style={Styles.Fonts.basicX}>
                            As previously covered, Therapists can create 'assignments' and 'meetings' for their clients. These events will be marked on both the Therapist
                            as well as the Child and the Guardians' accounts. 
                        </p>
                        <p style={Styles.Fonts.basicX}>
                            In our Calendar Image to the Left, we are currently in a Therapist account using the Pink Color Palette. This makes assignment due dates appear as 
                            lighter pink dots beneath the date and darker fuschia dots as markers for meetups. In this example, you can see an assignment is 
                            due on the 28th with a meeting on the 23rd. 
                        </p>
                        <p style={Styles.Fonts.basicX}>
                            Again in this screen, you will see that the user currently has August 28th selected. This shows that there is an assignment with 3 work out videos;
                            Rolling, Toe Touches, and Squat, due on August 28th. 
                        </p>
                        <p style={Styles.Fonts.basicX}>
                            Users, unless they disable the following feature, will also get a Push Notification sent to their device (Powered by Firebase) whenever one of the following occurrs. 
                        </p>
                        <ol>
                            <li><p style={Styles.Fonts.basicX}>
                                The Child and/or Guardian recieve an assignment or if a meeting has been scheduled
                            </p></li>
                            <li><p style={Styles.Fonts.basicX}>
                                The Start Date of an assignment is today. (Notifications sent at 9am)
                            </p></li>
                            <li><p style={Styles.Fonts.basicX}>
                                The End Date of an assignment is today. (Notifications sent at 9am)
                            </p></li>
                            <li><p style={Styles.Fonts.basicX}>
                                The End Date of an assignment has passed, and the assignment was not completed. 
                            </p></li>
                            <li><p style={Styles.Fonts.basicX}>
                                Guardians and Therapists can get notifications when a child completes an assignment
                            </p></li>
                            <li><p style={Styles.Fonts.basicX}>
                                A meeting is today. (Notifications sent at 9am)
                            </p></li>
                        </ol>
                    </div>
                </div>
                <div style={{paddingTop: 0, padding: 20}}>
                <div style={{flexDirection: 'row', display: 'flex', padding: 20}}>
                    <div style={{flex: 4, padding: 20, paddingTop: 0}}>
                        <p style={Styles.Fonts.basicX}>
                            From the Calendar Menu you are also able to click "View All", bringing you to the "View All" screen. 
                            From here, users are able to parse through all assignments and meetings, past and present. As you see in the first
                            image, 'Show Expired' is selected, and returns every assignment the Child has ever had. 
                        </p>
                        <p style={Styles.Fonts.basicX}>
                            Clicking on an individual assignment will open up a module that shows the due date, start date, and all videos assigned. If 
                            the assigned child completes any of the workouts while the assignment is active the video will return with a green background
                            as opposed to a red one. This allows therapists, children, and guardians alike  to check the progress of the assignment.
                        </p>
                    </div>
                    <div style={{flex: 8}}>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <OstCard
                                templateStyle={1}
                                imageSrc={""}
                                style={{height: 700}}
                            >
                            </OstCard>
                            <OstCard
                                templateStyle={1}
                                imageSrc={""}
                                style={{height: 700}}
                            >
                            </OstCard>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
            )
        }

        // Fifth Part Account Structure
        function renderAccountStructure(){
            return(
                <div style={{paddingTop: 20}}>
                    <p style={Styles.Fonts.basicX}>
                       The app is designed to supplement real life practices and systems. This means to say, the app was designed and will be most optimized for 
                       Physical Therapists and their existing clients. Most client type users are invited by their therapist and can create an account through an email they recieve. 
                       In order to do this, however; a therapist must first be a part of an Organization. Each organization has at least one founder account, which is typically also a 
                       therapist. This organization can then invite therapists, and those therapists can then invite clients. Each 'client' consists of a Parent and a Child. The Data Structure looks as so
                    </p>
                    <div>
                        <div>
                            <OstCard
                            templateStyle={1}
                            imageSrc={modelStruc}
                            style={{height: 500}}
                            >

                            </OstCard>
                        </div>
                    </div>
                    <div style={Styles.Fonts.lessonHeader}>Organization</div>
                    <p style={Styles.Fonts.basicX}>
                        The Organization Model is the parent to every other data model in the Kidz N Motion App. Organizations will <strong>have many</strong> Therapists, as well as a variety of other options that 
                        will apply to all Therapists and thus all Clients. Some of these properties include the payment settings as well as video settings from the Therapeutic Practice. While you would be able to access the 
                        information of Patients by finding the Therapists from the Organization and going down through the models that way, the Organization will also have direct relationships with the Clients and parents and children as well. 
                    </p>
                    <div style={Styles.Fonts.lessonHeader}>Users</div>
                    <p style={Styles.Fonts.basicX}>
                        All users are a part of the User tabel in the database, meaning Therapists, Children and Guardians alike are all just instances of the User Model. There is, however
                        <strong> role-specific properties</strong> attached to the user model that seperates Children from Guardians and Guardians from Therapists. This is mostly determined through the 'role' property which is 
                        provided during the create call to the API. If the role provded is "THERAPIST", then the user model follows a different path in the API's code than it would had "GUARDIAN" been provided as 
                        the role. These are the only two users that can directly sign up, as when signing up as a GUARDIAN, a CHILD user is automatically created alongside the parent using user provided information. 
                    </p>

                    <p style={Styles.Fonts.basicX}>
                        All Users are created through the same mutation, <storng>signupUser</storng>. As previously mentioned, this will take a 'role' as a parameter and from there will add the user role 
                        specific properties. Those properties include...
                    </p>
                    <p style={{...Styles.Fonts.basicX, fontSize: 20, color: 'grey'}}>
                        <strong style={{color: 'black'}}>Therapist Specific</strong>
                        <ul>
                            <li><span style={{...Styles.Code.code, fontSize: 20, color: 'black'}}>occationTitle</span></li>
                            <li><span style={{...Styles.Code.code, fontSize: 20, color: 'black'}}>enableAppointmentNotifications </span>(This is true if the Therapist gets notified on confirmed appointments)</li>
                        </ul>
                        <strong style={{color: 'black'}}>Guardian Specific</strong>
                        <ul>
                            <li><span style={{...Styles.Code.code, fontSize: 20, color: 'black'}}>messagesAreMuted</span> (This is true if the Therapist has the clien'st messages muted)</li>
                            <li><span style={{...Styles.Code.code, fontSize: 20, color: 'black'}}>appointmentsAreMuted</span> (This is true if the Therapist has the client's appointments muted)</li>
                            <li><span style={{...Styles.Code.code, fontSize: 20, color: 'black'}}>enableMissedDateNotifications</span> (This is true if the client has their missed asisignments muted)</li>
                            <li><span style={{...Styles.Code.code, fontSize: 20, color: 'black'}}>soloUser</span> (This is true if the client is using this without a therapist)</li>
                            <li><span style={{...Styles.Code.code, fontSize: 20, color: 'black'}}>soloUserStripeID</span> (This holds relevant payment IDs id a user is solo and has paid for full access)</li>
                        </ul>
                        <strong style={{color: 'black'}}>Child Specific</strong>
                        <ul>
                            <li><span style={{...Styles.Code.code, fontSize: 20, color: 'black'}}>canAccessSettings</span> (This is true if Guardian enabled the child to change their settings)</li>
                            <li><span style={{...Styles.Code.code, fontSize: 20, color: 'black'}}>canAccessMessages</span> (This is true if Guardian enabled the child to be able to message the therapist)</li>
                            <li><span style={{...Styles.Code.code, fontSize: 20, color: 'black'}}>leaveApp</span> (This is true if Guardian enabled the child to leave the app or change sign in status)</li>
                        </ul>
                    </p>

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
                        {/* {renderAccountStructure()} */}
                    {/* <div style={{...Styles.Fonts.lessonHeader, paddingTop: 30}}>Assignmnent Structure</div> */}
                </div>
            </div>
        </div>
    )
}