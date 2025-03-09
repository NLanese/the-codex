// React
import React, {useEffect, useState} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { tokenState, tabBarState, directoryDataState } from "../../../recoil/atoms";

// Styles 
import Styles from "../../../styles/styles";

// Ostrich
import { ODef } from "../../../OstrichComponents/Text/OstrichDefinition";
import { ODefContnet } from "../../../constants/oDefContent";
import { OstCard } from "../../../OstrichComponents/Format/OstCard";

// Assets
const OstCompImg = "../../../assets/icons/big/OstrichComponentsLogo.png";

export default function OstrichShowcase() {

  ///////////
  // State //
  ///////////

  const [directory, setDirectory] = useRecoilState(directoryDataState)

  ////////////////
  // UseEffects //
  ////////////////

  useEffect(() => {
    setDirectory(false)
  }, [])

  return (
    <div style={{marginTop: 20}}>
     <div style={Styles.Fonts.pageTitle}>The Ostrich React Component Library</div>
     <div style={{display: 'flex', flexDirection: 'row'}}>
        <OstCard style={{margin: "30px", flex: 9}}>
            <div style={Styles.Sections.lessonContent}>
                <p style={Styles.Fonts.basic}>
                This entire Site has been made using the Ostrich React Component Library and regular Vanilla React tags. 
                This means no other frameworks were used and this means developers who import our Ostrich Component Library can easily create a well designed site 
                of their own!
                </p>

                <p style={Styles.Fonts.basic}>
                Ostrich Components were made with the intent of heavily reducing the amount of time new developers have to spend on certain Front End aspects of development. 
                Using a multitude of optional props for each component, developers can have everything from extremely high functionality components with minimal development to extremely simple and low level components that come already styled. 
                </p>

                <div style={Styles.Fonts.lessonHeader}>Ostrich Cards (OstCards)</div>
                <p style={Styles.Fonts.basic}>
                Ostrich Cards are the Ostrich Framework's take on a View. They have predetermined padding and a box shadow to add an elevated visual effect. They are meant to be 
                versatile compoonents for a wide variety of uses, so by adding an 'onClick' function to an OstCard component you automatically make it behave and animate like a button. 
                </p>
                <p style={Styles.Fonts.basic}>
                Let's look at some examples
                </p>
                <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-around',
                }}>
                    <OstCard>
                        Vanilla Ostrich Card
                    </OstCard>
                    <OstCard
                    onClick={() => {console.log("Button Clicked")}}
                    >
                        Ostrich Card Button
                    </OstCard>
                    <OstCard
                    style={{width: 300, backgroundColor: 'blue', color: 'white', alignContent: 'center', textAlign: 'center'}}
                    >
                        Custom Styled Card Button
                    </OstCard>
                </div>
                <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-around',
                }}>
                    <div style={{...Styles.Sections.simpleLessonCode, width: '30%'}}>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstCard</span>
                            <span style={Styles.Code.reg}>{">"}</span>
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={{...Styles.Code.reg, marginLeft: 10}}>Vanilla Ostrich Card</span>
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.reg}>{"</"}</span>
                            <span style={Styles.Code.keyword}>OstCard</span>
                            <span style={Styles.Code.reg}>{">"}</span>
                        </p>
                    </div>

                    <div style={{...Styles.Sections.simpleLessonCode, width: '30%'}}>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstCard</span>
                        </p>
                        <p style={{...Styles.Code.code, marginLeft: 20}}>
                            <span style={Styles.Code.var}>onClick</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.str}>{"{"}</span>
                            <span style={Styles.Code.reg}>()</span>
                            <span style={Styles.Code.keyword}>{" => "}</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                        </p>
                        <p style={{...Styles.Code.code, marginLeft: 40}}>
                            <span style={Styles.Code.keyword}>console</span>
                            <span style={Styles.Code.reg}>.</span>
                            <span style={Styles.Code.var}>log</span>
                            <span style={Styles.Code.reg}>(</span>
                            <span style={Styles.Code.str}>"Button Pressed"</span>
                            <span style={Styles.Code.reg}>)</span>
                        </p>
                        <p style={{...Styles.Code.code, marginLeft: 20}}>
                            <span style={Styles.Code.reg}>{"}"}</span>
                            <span style={Styles.Code.str}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code}}>
                            <span style={Styles.Code.reg}>{"/>"}</span>
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={{...Styles.Code.reg, marginLeft: 10}}>Ostrich Card Button</span>
                        </p>
                        <p style={Styles.Code.code}>
                            <span style={Styles.Code.reg}>{"</"}</span>
                            <span style={Styles.Code.keyword}>OstCard</span>
                            <span style={Styles.Code.reg}>{">"}</span>
                        </p>
                    </div>

                    <div style={{...Styles.Sections.simpleLessonCode, width: '30%'}}>

                    </div>
                </div>
            </div>
            
        </OstCard>
        <OstCard style={{marginTop: 30, marginRight: 30, flex: 3}}>

        </OstCard>
     </div>
    </div>
  );
}
