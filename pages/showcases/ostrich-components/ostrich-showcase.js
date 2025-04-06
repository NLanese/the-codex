// React
import React, {useEffect, useState} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { tokenState, tabBarState, directoryDataState } from "../../../recoil/atoms";

// Styles 
import Styles from "../../../styles/styles";

// Ostrich
import { OstCard } from "../../../OstrichComponents/Format/OstCard";
import { OstrichDropDown } from "../../../OstrichComponents/Dropdown/OstrichDropDown";
import { OstrichTabBar } from "../../../OstrichComponents/Tabs/OstrichTabBar";
import { HeaderBar } from "../../../components/Global/headerBar";

// Assets
const OstCompImg = "../../../assets/icons/big/OstrichComponentsLogo.png";

export default function OstrichShowcase() {

  ///////////
  // State //
  ///////////

  const [directory, setDirectory] = useRecoilState(directoryDataState)

  const [titleForDrop3, setTitleForDrop3] = useState("Dynamic Title")
  const [colorForDrop4, setColorForDrop4] = useState("white")
  const [totalForDrop5, setTotalForDrop5] = useState(0)

  const [totalForTab3, setTotalForTab3] = useState(0)
  const [styleForTab4, setStyleForTab4] = useState({})

  useEffect(() => {
    console.log(styleForTab4)
  }, [styleForTab4])


  ////////////////
  // UseEffects //
  ////////////////

  useEffect(() => {
    // setDirectory(false)
  }, [])

  ////////////////
  // Renderings //
  ////////////////


  // OSTRICH CARD SECTION
  function renderOstrichCards(){
    return(
        <div style={{marginBottom: 30}}>
            <div style={Styles.Fonts.lessonHeader}>Ostrich Cards (OstCards)</div>
                
                {/* Preamble */}
                <p style={Styles.Fonts.basic}>
                Ostrich Cards are the Ostrich Framework's take on a View. They have predetermined padding and a box shadow to add an elevated visual effect. They are meant to be 
                versatile compoonents for a wide variety of uses, so by adding an 'onClick' function to an OstCard component you automatically make it behave and animate like a button. 
                </p>
                <p style={Styles.Fonts.basic}>
                Let's look at some examples
                </p>

                {/* Ost Cards Example Row One */}
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
                        Custom Styled Card
                    </OstCard>
                </div>

                {/* Ost Cards Code Row One */}
                <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-around',
                }}>
                    <div style={{...Styles.Sections.simpleLessonCode, width: '30%'}}>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstCard</span>
                            <span style={Styles.Code.reg}>{">"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={{...Styles.Code.reg, marginLeft: 10}}>Vanilla Ostrich Card</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"</"}</span>
                            <span style={Styles.Code.keyword}>OstCard</span>
                            <span style={Styles.Code.reg}>{">"}</span>
                        </p>
                    </div>

                    <div style={{...Styles.Sections.simpleLessonCode, width: '30%'}}>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstCard</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>onClick</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.str}>{"{"}</span>
                            <span style={Styles.Code.reg}>()</span>
                            <span style={Styles.Code.keyword}>{" => "}</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.keyword}>console</span>
                            <span style={Styles.Code.reg}>.</span>
                            <span style={Styles.Code.var}>log</span>
                            <span style={Styles.Code.reg}>(</span>
                            <span style={Styles.Code.str}>"Button Pressed"</span>
                            <span style={Styles.Code.reg}>)</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.reg}>{"}"}</span>
                            <span style={Styles.Code.str}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"/>"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={{...Styles.Code.reg, marginLeft: 10}}>Ostrich Card Button</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"</"}</span>
                            <span style={Styles.Code.keyword}>OstCard</span>
                            <span style={Styles.Code.reg}>{">"}</span>
                        </p>
                    </div>

                    <div style={{...Styles.Sections.simpleLessonCode, width: '30%'}}>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstCard</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>style</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.var}>{"{"}</span>
                            <span style={Styles.Code.str}>{"{"}</span>
                            <span style={Styles.Code.var}>width: </span>
                            <span style={Styles.Code.reg}>300, </span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>backgroundColor</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.str}>'blue'</span>
                            <span style={Styles.Code.reg}>, </span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>color</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.str}>'white'</span>
                            <span style={Styles.Code.reg}>, </span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>alignContent</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.str}>'center'</span>
                            <span style={Styles.Code.reg}>, </span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>textAlign</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.str}>'center'</span>
                            <span style={Styles.Code.reg}>, </span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.reg}>{"}"}</span>
                            <span style={Styles.Code.str}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"/>"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={{...Styles.Code.reg, marginLeft: 10}}>Custom Styled Card</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"</"}</span>
                            <span style={Styles.Code.keyword}>OstCard</span>
                            <span style={Styles.Code.reg}>{">"}</span>
                        </p>
                    </div>
                </div>

                {/* Ost Cards Example Row Two */}
                <div style={{paddingTop: 40}}>

                    {/* Preamble */}
                    <p style={Styles.Fonts.basic}>
                        As you see, adding an <strong>onClick</strong> property automatically transfroms the entire component into a button.
                        Additionally, you see that developers can still add their own custom styles to Ostrich Cards, while not removing the padding or shadow features the card has by default. 
                    </p>
                    <p style={Styles.Fonts.basic}>
                        Ostrich Cards are also a great way to display pictures, as they take image inputs and have several different template options to help your image be 
                        displayed exactly how you would like it to be
                    </p>
                    <p style={Styles.Fonts.basic}>
                        Let's take a look at some Ostrich Cards that use Templates
                    </p>


                    <div style={{display: 'flex', 
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    }}>
                        <OstCard
                            templateStyle={1}
                            imageSrc={OstCompImg}
                            style={{width: '30%', margin: 5}}
                        >
                            Template One
                        </OstCard>
                        <OstCard
                            templateStyle={2}
                            imageSrc={OstCompImg}
                            style={{width: '30%', margin: 5}}
                            onClick={() => {  console.log("Button Pressed") }}   
                        >
                            Template Two
                        </OstCard>
                        <OstCard
                            templateStyle={3}
                            imageSrc={OstCompImg}
                            style={{width: '30%', margin: 5}}
                            details={{title: 'Template Three', caption: "Number 3"}}
                        >
                            Inside wrapped content of Template Three.
                            The 'Title' section is provided via the details prop
                        </OstCard>
                    </div>
                </div>

                {/* Ost Cards Code Row Two */}
                <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-around',
                }}>
                    {/* Template One */}
                    <div style={{...Styles.Sections.simpleLessonCode, width: '30%'}}>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstCard</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>templateStyle</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.str}>{"{"}</span>
                            <span style={Styles.Code.reg}>{1}</span>
                            <span style={Styles.Code.str}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>imageSrc</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.var}>{"{"}</span>
                            <span style={Styles.Code.str}>"../../ExampleImagePath"</span>
                            <span style={Styles.Code.var}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{">"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={{...Styles.Code.reg, marginLeft: 10}}>Template One</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"</"}</span>
                            <span style={Styles.Code.keyword}>OstCard</span>
                            <span style={Styles.Code.reg}>{">"}</span>
                        </p>
                    </div>

                    {/* Template Two */}
                    <div style={{...Styles.Sections.simpleLessonCode, width: '30%'}}>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstCard</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>templateStyle</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.str}>{"{"}</span>
                            <span style={Styles.Code.reg}>{2}</span>
                            <span style={Styles.Code.str}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>imageSrc</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.var}>{"{"}</span>
                            <span style={Styles.Code.str}>"../../ExampleImagePath"</span>
                            <span style={Styles.Code.var}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>onClick</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.str}>{"{"}</span>
                            <span style={Styles.Code.reg}>()</span>
                            <span style={Styles.Code.keyword}>{" => "}</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.keyword}>console</span>
                            <span style={Styles.Code.reg}>.</span>
                            <span style={Styles.Code.var}>log</span>
                            <span style={Styles.Code.reg}>(</span>
                            <span style={Styles.Code.str}>"Button Pressed"</span>
                            <span style={Styles.Code.reg}>)</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.reg}>{"}"}</span>
                            <span style={Styles.Code.str}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{">"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={{...Styles.Code.reg, marginLeft: 10}}>Template Two</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"</"}</span>
                            <span style={Styles.Code.keyword}>OstCard</span>
                            <span style={Styles.Code.reg}>{">"}</span>
                        </p>
                    </div>

                    {/* Template Three */}
                    <div style={{...Styles.Sections.simpleLessonCode, width: '30%'}}>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstCard</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>templateStyle</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.str}>{"{"}</span>
                            <span style={Styles.Code.reg}>{3}</span>
                            <span style={Styles.Code.str}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>imageSrc</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.var}>{"{"}</span>
                            <span style={Styles.Code.str}>"../../ExampleImagePath"</span>
                            <span style={Styles.Code.var}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>details</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.str}>{"{"}</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>title</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.str}>"Template Three"</span>
                            <span style={Styles.Code.reg}>, </span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>caption</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.str}>"Number 3"</span>

                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.reg}>{"}"}</span>
                            <span style={Styles.Code.str}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{">"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={{...Styles.Code.reg, marginLeft: 10}}>Inside wrapped content of ...</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"</"}</span>
                            <span style={Styles.Code.keyword}>OstCard</span>
                            <span style={Styles.Code.reg}>{">"}</span>
                        </p>
                    </div>
                </div>

                {/* Ost Cards Example Row Three */}
                <div style={{paddingTop: 40}}>
                    <div style={{display: 'flex', 
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    }}>
                        {/* Template Three no 'details' */}
                        <OstCard
                            templateStyle={3}
                            imageSrc={OstCompImg}
                            style={{width: '30%', margin: 5}}
                        >
                            Template Three with no 'details' prop
                        </OstCard>

                        {/* Template Four */}
                        <OstCard
                        templateStyle={4}
                        style={{width: '30%', margin: 5}}
                        details={{
                            title: "Template Four",
                            caption: "Number 4",
                            columnRight: "Text or Component",
                            columnLeft: (
                                <div style={{backgroundColor: 'pink', height: 40}}>
                                    Text or Component
                                </div>
                            )
                        }}  
                        />

                        {/* Template Four With no Title or Caption */}
                        <OstCard
                        templateStyle={4}
                        style={{width: '30%', margin: 5}}
                        details={{
                            columnRight: "With no Title or Caption",
                            columnLeft: (
                                <div style={{backgroundColor: 'cyan', height: 40}}>
                                    Template Four
                                </div>
                            )
                        }}  
                        />
                    </div>
                </div>

                {/* Ost Cards Code Row Three */}
                <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-around',
                }}>
                    {/* Template Three no 'details' */}
                    <div style={{...Styles.Sections.simpleLessonCode, width: '30%'}}>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstCard</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>templateStyle</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.str}>{"{"}</span>
                            <span style={Styles.Code.reg}>{3}</span>
                            <span style={Styles.Code.str}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>imageSrc</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.var}>{"{"}</span>
                            <span style={Styles.Code.str}>"../../ExampleImagePath"</span>
                            <span style={Styles.Code.var}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{">"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={{...Styles.Code.reg, marginLeft: 10}}>Template Three with no 'details' prop</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"</"}</span>
                            <span style={Styles.Code.keyword}>OstCard</span>
                            <span style={Styles.Code.reg}>{">"}</span>
                        </p>
                    </div>

                    {/* Template Four */}
                    <div style={{...Styles.Sections.simpleLessonCode, width: '30%'}}>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstCard</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>templateStyle</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.str}>{"{"}</span>
                            <span style={Styles.Code.reg}>{4}</span>
                            <span style={Styles.Code.str}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>details</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.str}>{"{"}</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>title</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.str}>"Template Three"</span>
                            <span style={Styles.Code.reg}>, </span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>caption</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.str}>"Number 3"</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>columnLeft</span>
                            <span style={Styles.Code.reg}>: (</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>div </span>
                            <span style={Styles.Code.var}>style</span>
                            <span style={Styles.Code.reg}>= </span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.str}>{"{"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 80}}>
                            <span style={Styles.Code.var}>backgroundColor</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.str}>"pink"</span>
                            <span style={Styles.Code.reg}>, </span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 80}}>
                            <span style={Styles.Code.var}>height</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.reg}>40</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                            <span style={Styles.Code.reg}>{"}"}</span>
                            <span style={Styles.Code.str}>{"}"}</span>
                            <span style={Styles.Code.reg}>{">"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 80}}>
                            <span style={{...Styles.Code.reg, marginLeft: 10}}>Text or Component</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                            <span style={Styles.Code.reg}>{"</"}</span>
                            <span style={Styles.Code.keyword}>div </span>
                            <span style={Styles.Code.reg}>{">"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.reg}>),</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>columnRight</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.str}>"Text or Component" </span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.str}>{"}"}</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"/>"}</span>
                        </p>
                    </div>

                    {/* Template Three */}
                    <div style={{...Styles.Sections.simpleLessonCode, width: '30%'}}>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstCard</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>templateStyle</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.str}>{"{"}</span>
                            <span style={Styles.Code.reg}>{4}</span>
                            <span style={Styles.Code.str}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>details</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.str}>{"{"}</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>columnRight</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.str}>"With no Details" </span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>columnLeft</span>
                            <span style={Styles.Code.reg}>: (</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>div </span>
                            <span style={Styles.Code.var}>style</span>
                            <span style={Styles.Code.reg}>= </span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.str}>{"{"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 80}}>
                            <span style={Styles.Code.var}>backgroundColor</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.str}>"cyan"</span>
                            <span style={Styles.Code.reg}>, </span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 80}}>
                            <span style={Styles.Code.var}>height</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.reg}>40</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                            <span style={Styles.Code.reg}>{"}"}</span>
                            <span style={Styles.Code.str}>{"}"}</span>
                            <span style={Styles.Code.reg}>{">"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 80}}>
                            <span style={{...Styles.Code.reg, marginLeft: 10}}>Template Four</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                            <span style={Styles.Code.reg}>{"</"}</span>
                            <span style={Styles.Code.keyword}>div </span>
                            <span style={Styles.Code.reg}>{">"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.reg}>),</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.str}>{"}"}</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"/>"}</span>
                        </p>
                    </div>
                </div>
        </div>
    )
  }


  // OSTRICH BUTTON SECTION
  function renderOstrichButtons(){
    return(
        <div style={{marginBottom: 30}}>
        <div style={Styles.Fonts.lessonHeader}>Ostrich Buttons (OstrichButton)</div>
            
            {/* Preamble */}
            <p style={Styles.Fonts.basic}>
            Ostrich Cards can work as buttons, but if you want an out-of-the-box componnt that in its Vanilla-most behavior acts as a button, then the <strong>OstrichButton</strong> component is for you. 
            </p>
        </div>
    )
  }

  // OSTRICH TOGGLE BUTTON SECTION
  function renderOstrichToggles(){

  }

  // OSTRICH DROPDOWN SECTION
  function renderOstrichDropDown(){
    return(
        <div style={{marginBottom: 30}}>
            <div style={Styles.Fonts.lessonHeader}>Ostrich Dropdown Menus (OstrichDropDowns)</div>
            
            {/* Preamble */}
            <p style={Styles.Fonts.basic}>
            Ostrich Components provide a means for consolidating many selections or a collection of information via the OstrichDropDown. Without any styling or advanced tuning needed, 
            OstrichDropDowns simply take an object or an array representing some data and processes it into a well rendered dropdown, with its own onHover features and clickability.     
            </p>

            <p style={Styles.Fonts.basic}>
            Let's check out some examples
            </p>

            {/* Ost Dropdown Example Row One */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-around',
                }}>

                    {/* Vanilla Dropdown */}
                    <OstrichDropDown
                        title="Vanilla Dropdown"
                        drawers={[1, 2, 3]}
                    />

                    {/* Click to Open Dropdown */}
                    <OstrichDropDown
                        title="Click to Open"
                        openOnHover={false}
                        drawers={[1, 2, 3]}
                    />

                    {/* Click to Open Dropdown */}
                    <OstrichDropDown
                        title={titleForDrop3}
                        drawers={[1, 2, 3]}
                        onDrawerClick={(drawer) => setTitleForDrop3(drawer)}
                    />
            </div>

            {/* Ost Dropdown Code Row One */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-around',
                }}>
                    {/* Template One */}
                    <div style={{...Styles.Sections.simpleLessonCode, width: '33%'}}>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstrichDropDown</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>title</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.str}>"Vanilla Dropdown"</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>drawers</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.keyword}>{"["}</span>
                            <span style={Styles.Code.reg}>1, 2, 3</span>
                            <span style={Styles.Code.keyword}>{"["}</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"/>"}</span>
                        </p>
                    </div>

                    {/* Click to Open Dropdown */}
                    <div style={{...Styles.Sections.simpleLessonCode, width: '30%'}}>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstrichDropDown</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>title</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.str}>"Click to Open"</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>drawers</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.keyword}>{"["}</span>
                            <span style={Styles.Code.reg}>1, 2, 3</span>
                            <span style={Styles.Code.keyword}>{"["}</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>openOnHover</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.bool}>false</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"/>"}</span>
                        </p>
                    </div>

                    {/* Dynamic Title  Dropdown */}
                    <div style={{...Styles.Sections.simpleLessonCode, width: '33%'}}>
                    <p style={{...Styles.Code.code, fontSize: 18, marginBottom: 15}}>
                        <span style={Styles.Code.keyword}>const [</span>
                        <span style={Styles.Code.var}>title</span>
                        <span style={Styles.Code.reg}>,</span>
                        <span style={Styles.Code.func}> setTitle</span>
                        <span style={Styles.Code.keyword}>] </span>
                        <span style={Styles.Code.reg}> = </span>
                        <span style={Styles.Code.var}>useState</span>
                        <span style={Styles.Code.keyword}>{"("}</span>
                        <span style={Styles.Code.str}>"Dynamic Title"</span>
                        <span style={Styles.Code.keyword}>{")"}</span>
                    </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstrichDropDown</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>title</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.var}>title</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>drawers</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.keyword}>{"["}</span>
                            <span style={Styles.Code.reg}>1, 2, 3</span>
                            <span style={Styles.Code.keyword}>{"["}</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>onDrawerClick</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.str}>{"("}</span>
                            <span style={Styles.Code.var}>input</span>
                            <span style={Styles.Code.str}>{")"}</span>
                            <span style={Styles.Code.keyword}>{" => {"}</span>
                            <span style={Styles.Code.func}>setTitle(</span>
                            <span style={Styles.Code.var}>input</span>
                            <span style={Styles.Code.func}>{")"}</span>
                            <span style={Styles.Code.keyword}>{"}"}</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"/>"}</span>
                        </p>
                    </div>
            </div>

            {/* Preamble */}
            <p style={{...Styles.Fonts.basic, marginTop: 50}}>
            As shown above, the <strong>Ostrich Dropdown menu</strong> can quickly and easily generate a dropdown menu for an array of items. They produce a sleak and responsive Drop menu as well as drawers, but that's not all you can do with OstrichDropDowns.
            You can add unique styles or functionalities to individual drawers by adding properties to the `drawers` array's items. 
            </p>

            <p style={Styles.Fonts.basic}>
            Let's check out some examples
            </p>

            {/* Ost Dropdown Example Row One */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-around',
                }}>
                    <OstrichDropDown 
                        title={"Unique Drawer Styles"}
                        boxStyle={{width: 350, backgroundColor: colorForDrop4}}
                        activeBoxStyle={{backgroundColor: colorForDrop4}}
                        onDrawerClick={(drawer) => setColorForDrop4(drawer.style.color)}
                        drawers={[
                            {
                                title: "Red", 
                                style: {color: 'red'}, 
                                activeStyle: {backgroundColor: 'red', color: 'black'},
                                hoverStyle: {backgroundColor: 'pink', color: 'black'}
                            },
                            {
                                title: "Blue", 
                                style: {color: 'blue'}, 
                                activeStyle: {backgroundColor: 'blue', color: 'black'},
                                hoverStyle: {backgroundColor: 'cyan', color: 'black'}
                            },
                            {
                                title: "Green", 
                                style: {color: 'green'}, 
                                activeStyle: {backgroundColor: 'green', color: 'black'},
                                hoverStyle: {backgroundColor: 'lime', color: 'black'}
                            }
                        ]}
                    />
                    <OstrichDropDown 
                        title={(`Total: ${totalForDrop5}`)}
                        boxStyle={{width: 350}}
                        drawersActivate={false}
                        drawers={[
                            {
                                title: "Increase By One", 
                                onClick: () => setTotalForDrop5(totalForDrop5 + 1)
                            },
                            {
                                title: "Decrease By Two", 
                                onClick: () => setTotalForDrop5(totalForDrop5 - 2)
                            },
                            {
                                title: "Double the total", 
                                onClick: () => setTotalForDrop5(totalForDrop5 * 2)
                            }
                        ]}
                    />
            </div>

            {/* Ost Dropdown Code Row Two */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-around',
                }}>
                    {/* Unique Drawer Styles Code */}
                    <div style={{...Styles.Sections.simpleLessonCode, width: '45%'}}>
                    <p style={{...Styles.Code.code, fontSize: 18, marginBottom: 15}}>
                        <span style={Styles.Code.keyword}>const [</span>
                        <span style={Styles.Code.var}>pickedColor</span>
                        <span style={Styles.Code.reg}>,</span>
                        <span style={Styles.Code.func}> setPickedColor</span>
                        <span style={Styles.Code.keyword}>] </span>
                        <span style={Styles.Code.reg}> = </span>
                        <span style={Styles.Code.var}>useState</span>
                        <span style={Styles.Code.keyword}>{"("}</span>
                        <span style={Styles.Code.str}>"white"</span>
                        <span style={Styles.Code.keyword}>{")"}</span>
                    </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstrichDropDown</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>title</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.str}>"Unique Drawer Styles"</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>boxStyle</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.keyword}>{"{"}</span>
                            <span style={Styles.Code.var}>width: </span>
                            <span style={Styles.Code.reg}>350, </span>
                            <span style={Styles.Code.var}>backgroundColor: </span>
                            <span style={Styles.Code.var}>pickedColor</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                            <span style={Styles.Code.keyword}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>activeBoxStyle</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.keyword}>{"{"}</span>
                            <span style={Styles.Code.var}>backgroundColor: </span>
                            <span style={Styles.Code.var}>pickedColor</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                            <span style={Styles.Code.keyword}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>onDrawerClick</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.str}>{"("}</span>
                            <span style={Styles.Code.var}>drawer</span>
                            <span style={Styles.Code.str}>{")"}</span>
                            <span style={Styles.Code.keyword}>{" => {"}</span>
                            <span style={Styles.Code.func}>setColor(</span>
                            <span style={Styles.Code.var}>drawer.style.color</span>
                            <span style={Styles.Code.func}>{")"}</span>
                            <span style={Styles.Code.keyword}>{"}"}</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>drawers</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.keyword}>{"["}</span>
                        </p>

                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.reg}>{"{"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>title: </span>
                            <span style={Styles.Code.str}>"Red"</span>
                            <span style={Styles.Code.reg}>,</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>style: </span>
                            <span style={Styles.Code.keyword}>{"{"}</span>
                            <span style={Styles.Code.var}>color: </span>
                            <span style={Styles.Code.str}>"red"</span>
                            <span style={Styles.Code.keyword}>{"}"}</span>
                            <span style={Styles.Code.reg}>, </span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>activeStyle: </span>
                            <span style={Styles.Code.keyword}>{"{"}</span>
                            <span style={Styles.Code.var}>backgroundColor: </span>
                            <span style={Styles.Code.str}>"red"</span>
                            <span style={Styles.Code.reg}>, </span>
                            <span style={Styles.Code.var}>color: </span>
                            <span style={Styles.Code.str}>"black"</span>
                            <span style={Styles.Code.keyword}>{"}"}</span>
                            <span style={Styles.Code.reg}>,</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>hoverStyle: </span>
                            <span style={Styles.Code.keyword}>{"{"}</span>
                            <span style={Styles.Code.var}>backgroundColor: </span>
                            <span style={Styles.Code.str}>"pink"</span>
                            <span style={Styles.Code.reg}>, </span>
                            <span style={Styles.Code.var}>color: </span>
                            <span style={Styles.Code.str}>"black"</span>
                            <span style={Styles.Code.keyword}>{"}"}</span>
                            <span style={Styles.Code.reg}>,</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.reg}>{"},"}</span>
                        </p>

                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.reg}>{"{"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>title: </span>
                            <span style={Styles.Code.str}>"Blue"</span>
                            <span style={Styles.Code.reg}>,</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>style: </span>
                            <span style={Styles.Code.keyword}>{"{"}</span>
                            <span style={Styles.Code.var}>color: </span>
                            <span style={Styles.Code.str}>"blue"</span>
                            <span style={Styles.Code.keyword}>{"}"}</span>
                            <span style={Styles.Code.reg}>, </span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>activeStyle: </span>
                            <span style={Styles.Code.keyword}>{"{"}</span>
                            <span style={Styles.Code.var}>backgroundColor: </span>
                            <span style={Styles.Code.str}>"blue"</span>
                            <span style={Styles.Code.reg}>, </span>
                            <span style={Styles.Code.var}>color: </span>
                            <span style={Styles.Code.str}>"black"</span>
                            <span style={Styles.Code.keyword}>{"}"}</span>
                            <span style={Styles.Code.reg}>,</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>hoverStyle: </span>
                            <span style={Styles.Code.keyword}>{"{"}</span>
                            <span style={Styles.Code.var}>backgroundColor: </span>
                            <span style={Styles.Code.str}>"cyan"</span>
                            <span style={Styles.Code.reg}>, </span>
                            <span style={Styles.Code.var}>color: </span>
                            <span style={Styles.Code.str}>"black"</span>
                            <span style={Styles.Code.keyword}>{"}"}</span>
                            <span style={Styles.Code.reg}>,</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.reg}>{"},"}</span>
                        </p>


                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.reg}>{"{"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>title: </span>
                            <span style={Styles.Code.str}>"Green"</span>
                            <span style={Styles.Code.reg}>,</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>style: </span>
                            <span style={Styles.Code.keyword}>{"{"}</span>
                            <span style={Styles.Code.var}>color: </span>
                            <span style={Styles.Code.str}>"green"</span>
                            <span style={Styles.Code.keyword}>{"}"}</span>
                            <span style={Styles.Code.reg}>, </span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>activeStyle: </span>
                            <span style={Styles.Code.keyword}>{"{"}</span>
                            <span style={Styles.Code.var}>backgroundColor: </span>
                            <span style={Styles.Code.str}>"green"</span>
                            <span style={Styles.Code.reg}>, </span>
                            <span style={Styles.Code.var}>color: </span>
                            <span style={Styles.Code.str}>"black"</span>
                            <span style={Styles.Code.keyword}>{"}"}</span>
                            <span style={Styles.Code.reg}>,</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>hoverStyle: </span>
                            <span style={Styles.Code.keyword}>{"{"}</span>
                            <span style={Styles.Code.var}>backgroundColor: </span>
                            <span style={Styles.Code.str}>"lime"</span>
                            <span style={Styles.Code.reg}>, </span>
                            <span style={Styles.Code.var}>color: </span>
                            <span style={Styles.Code.str}>"black"</span>
                            <span style={Styles.Code.keyword}>{"}"}</span>
                            <span style={Styles.Code.reg}>,</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>



                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.keyword}>{"]"}</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 0}}>
                            <span style={Styles.Code.reg}>{"/>"}</span>
                        </p>
                    </div>

                    {/* Unique Drawer onClicks */}
                    <div style={{...Styles.Sections.simpleLessonCode, width: '45%'}}>
                        <p style={{...Styles.Code.code, fontSize: 18, marginBottom: 15}}>
                            <span style={Styles.Code.keyword}>const [</span>
                            <span style={Styles.Code.var}>total</span>
                            <span style={Styles.Code.reg}>,</span>
                            <span style={Styles.Code.func}> setTotal</span>
                            <span style={Styles.Code.keyword}>] </span>
                            <span style={Styles.Code.reg}> = </span>
                            <span style={Styles.Code.var}>useState</span>
                            <span style={Styles.Code.keyword}>{"("}</span>
                            <span style={Styles.Code.reg}>0</span>
                            <span style={Styles.Code.keyword}>{")"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstrichDropDown</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>title</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.keyword}>`</span>
                            <span style={Styles.Code.str}>Total: </span>
                            <span style={Styles.Code.keyword}>{"${"}</span>
                            <span style={Styles.Code.var}>total</span>
                            <span style={Styles.Code.keyword}>{"}`"}</span>
                            <span style={Styles.Code.reg}>{"}"}</span>

                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>boxStyle</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.keyword}>{"{"}</span>
                            <span style={Styles.Code.var}>width: </span>
                            <span style={Styles.Code.reg}>350 </span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                            <span style={Styles.Code.keyword}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>drawersActivate</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.bool}>false</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>
                        
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>drawers</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.keyword}>{"["}</span>
                        </p>

                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.reg}>{"{"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>title: </span>
                            <span style={Styles.Code.str}>"Increase By One"</span>
                            <span style={Styles.Code.reg}>,</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>onClick: </span>
                            <span style={Styles.Code.keyword}>{"() => "}</span>
                            <span style={Styles.Code.func}>setTotal(</span>
                            <span style={Styles.Code.var}>total</span>
                            <span style={Styles.Code.reg}> + 1</span>
                            <span style={Styles.Code.func}>)</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.reg}>{"},"}</span>
                        </p>

                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.reg}>{"{"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>title: </span>
                            <span style={Styles.Code.str}>"Decrease By Two"</span>
                            <span style={Styles.Code.reg}>,</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>onClick: </span>
                            <span style={Styles.Code.keyword}>{"() => "}</span>
                            <span style={Styles.Code.func}>setTotal(</span>
                            <span style={Styles.Code.var}>total</span>
                            <span style={Styles.Code.reg}> - 2</span>
                            <span style={Styles.Code.func}>)</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.reg}>{"},"}</span>
                        </p>

                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.reg}>{"{"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>title: </span>
                            <span style={Styles.Code.str}>"Double Total"</span>
                            <span style={Styles.Code.reg}>,</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.var}>onClick: </span>
                            <span style={Styles.Code.keyword}>{"() => "}</span>
                            <span style={Styles.Code.func}>setTotal(</span>
                            <span style={Styles.Code.var}>total</span>
                            <span style={Styles.Code.reg}> * 2</span>
                            <span style={Styles.Code.func}>)</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.reg}>{"},"}</span>
                        </p>

                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"/>"}</span>
                        </p>
                    </div>

            </div>

            {/* Props Header */}
            <div style={{...Styles.Fonts.lessonSubHeader, marginTop: 60}}>
                OstrichDropDown Props
            </div>

            {/* Props Row One */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
                height: 140,
                gap: 15
            }}>
                <OstCard style={Styles.Sections.propCardStr}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>title</span>
                            <span style={Styles.Fonts.h2}> - String</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            A string value that will be shown on the dropdown tab itself
                        </p>
                    </div>
                </OstCard>
               
                <OstCard style={Styles.Sections.propCardFunc}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>onClick</span>
                            <span style={Styles.Fonts.h2}> - Function</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional)</span> A function that fires every time the Dropdown Tab is clicked
                        </p>
                    </div>
                </OstCard>
                
                <OstCard style={Styles.Sections.propCardFunc}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>onMouseEnter</span>
                            <span style={Styles.Fonts.h2}> - Function</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional)</span> A function that fires every time the user's cursor enters the Dropdown Tab's dimensions
                        </p>
                    </div>
                </OstCard>
            </div>

            {/* Props Row Two */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
                height: 140,
                gap: 15
            }}>
                <OstCard style={Styles.Sections.propCardFunc}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>onMouseLeave</span>
                            <span style={Styles.Fonts.h2}> - Function</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional)</span> A function that fires every time the user's cursor leaves the Dropdown Tab's dimensions
                        </p>
                    </div>
                </OstCard>
                
                <OstCard style={Styles.Sections.propCardBool}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>openOnHover</span>
                            <span style={Styles.Fonts.h2}> - Boolean</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                          DEFAULTS TO TRUE. If true, the Dropdown Tab will open its drawers as soon as the user's cursor enters its dimensions
                        </p>
                    </div>
                </OstCard>
                
                <OstCard style={Styles.Sections.propCardBool}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>closeOnLeave</span>
                            <span style={Styles.Fonts.h2}> - Boolean</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                          DEFAULTS TO TRUE. If true, the Dropdown Tab will close its drawers as soon as the user's cursor leaves the dimensions of both the Dropdown tab as well as its drawers.
                        </p>
                    </div>
                </OstCard>
                
            </div>

            {/* Props Row Three */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
                height: 140,
                gap: 15
            }}>
                <OstCard style={Styles.Sections.propCardObj}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>boxStyle</span>
                            <span style={Styles.Fonts.h2}> - Object</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional)</span> Style of the Dropdown Tab itself. If nothing is provided, then the default styles alone will apply. It is recommended at least that a backgroundColor be provided.
                        </p>
                    </div>
                </OstCard>
                
                <OstCard style={Styles.Sections.propCardObj}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>hoverBoxStyle</span>
                            <span style={Styles.Fonts.h2}> - Object</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional)</span> Style of the Dropdown Tab itself while hovered. If nothing is provided, then the default styles alone will apply. It is recommended at least that a backgroundColor be provided. Only the differences between this and the boxStyle will need to be includes, as this will inherit
                        </p>
                    </div>
                </OstCard>
                
                <OstCard style={Styles.Sections.propCardObj}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>activeBoxStyle</span>
                            <span style={Styles.Fonts.h2}> - Object</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                        <span style={{fontWeight: 600}}>(Optional)</span> Style of the Dropdown Tab itself while the drawers are opened. If nothing is provided, then the default styles alone will apply. It is recommended at least that a backgroundColor be provided. Only the differences between this and the boxStyle will need to be includes, as this will inherit
                        </p>
                    </div>
                </OstCard>
                
            </div>

            {/* Props Row Four */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
                height: 140,
                gap: 15
            }}>
                <OstCard style={Styles.Sections.propCardObj}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>titleStyle</span>
                            <span style={Styles.Fonts.h2}> - Object</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional)</span> Style of the text in the Dropdown Tab itself. If nothing is provided, then the default styles alone will apply. 
                        </p>
                    </div>
                </OstCard>
                
                <OstCard style={Styles.Sections.propCardObj}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>hoverTitleStyle</span>
                            <span style={Styles.Fonts.h2}> - Object</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional)</span> Style of the text in the Dropdown Tab itself while hovered. If nothing is provided, then the default styles alone will apply. Only the differences between this and the titleStyle will need to be includes, as this will inherit
                        </p>
                    </div>
                </OstCard>
                
                <OstCard style={Styles.Sections.propCardObj}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>activeBoxStyle</span>
                            <span style={Styles.Fonts.h2}> - Object</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                        <span style={{fontWeight: 600}}>(Optional)</span> Style of the Dropdown Tab itself while the drawers are opened. If nothing is provided, then the default styles alone will apply. It is recommended at least that a backgroundColor be provided.
                        </p>
                    </div>
                </OstCard>
                
            </div>

            {/* Props Row Five */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
                height: 140,
                gap: 15
            }}>
                <OstCard style={Styles.Sections.propCardObj}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>boxStyle</span>
                            <span style={Styles.Fonts.h2}> - Object</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional)</span> Style of the Dropdown Tab itself. If nothing is provided, then the default styles alone will apply. It is recommended at least that a backgroundColor be provided.
                        </p>
                    </div>
                </OstCard>
                
                <OstCard style={Styles.Sections.propCardObj}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>hoverBoxStyle</span>
                            <span style={Styles.Fonts.h2}> - Object</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional)</span> Style of the Dropdown Tab itself while hovered. If nothing is provided, then the default styles alone will apply. It is recommended at least that a backgroundColor be provided. Only the differences between this and the boxStyle will need to be includes, as this will inherit
                        </p>
                    </div>
                </OstCard>
                
                <OstCard style={Styles.Sections.propCardObj}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>activeBoxStyle</span>
                            <span style={Styles.Fonts.h2}> - Object</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                        <span style={{fontWeight: 600}}>(Optional)</span> Style of the Dropdown Tab itself while the drawers are opened. If nothing is provided, then the default styles alone will apply. It is recommended at least that a backgroundColor be provided. Only the differences between this and the boxStyle will need to be includes, as this will inherit
                        </p>
                    </div>
                </OstCard>
                
            </div>

            {/* Props Row Six */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
                height: 140,
                gap: 15
            }}>
                <OstCard style={Styles.Sections.propCardObj}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>drawerStyle</span>
                            <span style={Styles.Fonts.h2}> - Object</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional)</span> Style of the Dropdown Drawers when not hovered and not active. If nothing is provided, then the default styles alone will apply. 
                        </p>
                    </div>
                </OstCard>
                
                <OstCard style={Styles.Sections.propCardObj}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>hoverDrawerStyle</span>
                            <span style={Styles.Fonts.h2}> - Object</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional)</span> Style of the Dropdown Drawers when not hovered and not active. If nothing is provided, then the default styles alone will apply. Only the differences between this and the drawerStyle will need to be includes, as this will inherit
                        </p>
                    </div>
                </OstCard>
                
                <OstCard style={Styles.Sections.propCardObj}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>activeDrawerStyle</span>
                            <span style={Styles.Fonts.h2}> - Object</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional)</span> Style of the Dropdown Drawers when not hovered and not active. If nothing is provided, then the default styles alone will apply. Only the differences between this and the drawerStyle will need to be includes, as this will inherit
                        </p>
                    </div>
                </OstCard>
                
            </div>

             {/* Props Row Seven */}
             <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
                height: 140,
                gap: 15
            }}>
                <OstCard style={Styles.Sections.propCardBool}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>drawerStyle</span>
                            <span style={Styles.Fonts.h2}> - Boolean</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                          DEFAULTS TO FALSE. If true, the Dropdown Tab will ONLY open when the 'open' prop is set to true. This means hovering over it and clicking it will not open it unless otherwise specified through the appropriate props. 
                        </p>
                    </div>
                </OstCard>
                
                <OstCard style={Styles.Sections.propCardBool}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>open</span>
                            <span style={Styles.Fonts.h2}> - Boolean</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional)</span> If this value is 'true' then the drawers will be open. If this value is false AND 'manualOpen' is true, then the drawers will be closed. If this value is not provided, the Dropdown will behave normally, opening on hover unless openOnHover is false; in which case users will have to click the Dropdown Tab to open it
                        </p>
                    </div>
                </OstCard>
               
                <OstCard style={Styles.Sections.propCardBool}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>boxHovers</span>
                            <span style={Styles.Fonts.h2}> - Boolean</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                          DEFAULTS TO TRUE. If false, hovering over a dropdown tab will not change its Style. This does not change anything if openOnHover is true, as Dropdowns display their aciveBoxStyle when opened.
                        </p>
                    </div>
                </OstCard>
                
            </div>

            {/* Props Row Eight */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
                height: 140,
                gap: 15
            }}>

                <OstCard style={Styles.Sections.propCardBool}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>boxActivates</span>
                            <span style={Styles.Fonts.h2}> - Boolean</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                          DEFAULTS TO TRUE. If false, clicking on a dropdown tab or hovering over it while openOnHover is true will not change its Style. 
                        </p>
                    </div>
                </OstCard>

                <OstCard style={Styles.Sections.propCardBool}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>drawersActivate</span>
                            <span style={Styles.Fonts.h2}> - Boolean</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                          DEFAULTS TO TRUE. If false, clicking on a dropdown drawer will not change its Style. 
                        </p>
                    </div>
                </OstCard>

               
                <OstCard style={Styles.Sections.propCardBool}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>noShadow</span>
                            <span style={Styles.Fonts.h2}> - Boolean</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            DEFAULTS TO FALSE. If true, then the default boxShadow rules will not be applied
                        </p>
                    </div>
                </OstCard>
                
            </div>

            {/* Props Row Nine */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
                height: 140,
                gap: 15
            }}>

                <OstCard style={Styles.Sections.propCardBool}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>noBorder</span>
                            <span style={Styles.Fonts.h2}> - Boolean</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            DEFAULTS TO FALSE. If true, then the default border rules will not be applied
                        </p>
                    </div>
                </OstCard>

                <OstCard style={Styles.Sections.propCardBool}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>drawersHover</span>
                            <span style={Styles.Fonts.h2}> - Boolean</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            DEFAULTS TO TRUE. If false, then the Dropdown Drawers will not change style when hovered.
                        </p>
                    </div>
                </OstCard>
               
                <OstCard style={Styles.Sections.propCardBool}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>drawersHover</span>
                            <span style={Styles.Fonts.h2}> - Boolean</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            DEFAULTS TO TRUE. If false, then the Dropdown Drawers will not change style when activated / clicked.
                        </p>
                    </div>
                </OstCard>
                
            </div>

            {/* Props Row Ten */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 15,
                height: 320,
                width: '60%',
                paddingLeft: '20%'
            }}>

                <OstCard style={{...Styles.Sections.propCardArr, paddingRight: 15, paddingLeft: 15}}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>drawers</span>
                            <span style={Styles.Fonts.h2}> - Array</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            This is the value that dictates not only what the value of the drawers are, but also how each drawer will operate or be sytled uniquely from the others. 
                            There are several examples of different 'tabs' values in the showcase Dropdowns above.  
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            The 'tabs' value can simply be an array of strings or numbers; in which case the dropdown drawers will all inherit the styles and click functions that were provided to the Dropdown directly (through props like onClick, onMouseEnter, etc.)
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            Additionally, the 'tabs' value can be an array of objects, and each object will mirror the props of the dropdown. To be specific, acceptable object values are as follows...
                        </p>
                        <div style={{width: '10%', paddingLeft: '42.5%'}}>
                            <ul style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                                <li>title</li>
                                <li>style</li>
                                <li>activeStyle</li>
                                <li>hoverStyle</li>
                                <li>onClick</li>
                            </ul>
                        </div>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            While the above values are all the values that the Ostrich Components are built to expect and utilize, that does not mean you cannot add more properties to the objects in the 'tabs' array.
                            The functions that may fire, 'OnMouseEnter', 'OnMouseLeave', and 'OnClick' all expect the tab object itself as an optional input parameter. This means the entire object and all its properties are available for developers
                            to use in the functions that are passed through as props. For example, {"'OnMouseEnter: (tab) => {console.log(tab.customKeyValue)}'"} would allow you to access any custom key value pair you put into a tab object.
                        </p>
                            
                    </div>
                </OstCard>
                
            </div>


        </div>
    )
  }

  // OSTRICH TAB BAR SECTION
  function renderOstrichTabBar(){
    return(
        <div style={{marginBottom: 30}}>
        <div style={Styles.Fonts.lessonHeader}>Ostrich Tab Bars (OstrichTabBar)</div>
            
            {/* Preamble */}
            <div>
                <p style={Styles.Fonts.basic}>
                    Ostrich Dropdowns are also used as a part of another very dynamic and response Ostrich Component, the Ostrich Tab Bar. The Tab Bar that you see on the top of your screen right now 
                    (if you're reading this on the Ostrich Codex Website) is made using this Tab Bar Component.
                </p>

                <p style={Styles.Fonts.basic}>
                    Just like Dropdowns and Cards, Ostrich Tab Bars even in their most basic uneditted form have multiple forms of responsiveness as well as in-the-box styling that enables you to 
                    quickly render comprehensive and clean Tab Bars without having to develop it yourself. This includes automatic width calculations based on the amount of Tabs; different regular, 
                    active and hover bacground colors and styles; as well as all the features that were present in the Dropdown, as you can make the Tab Bar be a row of Dropdowns without ever needing 
                    to render the Dropdown yourself.
                </p>
                <p style={Styles.Fonts.basic}>
                    We'll get to showing you the code behind the current Header Tab Bar at the end of this section; but for now let's to some simpler examples. 
                </p>
            </div>

            
            {/* Ost TabBar Example Row One */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-around',
                }}>

                    <OstrichTabBar
                        tabs={[1, 2, 3]}
                    />

                    <OstrichTabBar
                        style={{width: 400}}
                        tabs={[
                            {
                                title: "Dropdown Tab",
                                dropdown: {
                                    drawers: ["Drawer1", "Drawer2", "Drawer3"]
                                }
                            }, 
                            "Tab 2", 
                            "Tab 3"
                        ]}
                    />
            </div>
            {/* Ost TabBar Code Row One */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-around',
                }}>
                    {/* Template One */}
                    <div style={{...Styles.Sections.simpleLessonCode, width: '40%'}}>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstrichTabBar</span>
                        </p>
                        
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>tabs</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.keyword}>{"["}</span>
                            <span style={Styles.Code.reg}>1, 2, 3</span>
                            <span style={Styles.Code.keyword}>{"["}</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"/>"}</span>
                        </p>
                    </div>

                    {/* Click to Open Dropdown */}
                    <div style={{...Styles.Sections.simpleLessonCode, width: '45%'}}>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstrichDropDown</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>style</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.keyword}>{"{"}</span>
                            <span style={Styles.Code.var}>width</span>
                            <span style={Styles.Code.reg}>: 350</span>
                            <span style={Styles.Code.keyword}>{"}"}</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>tabs</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.keyword}>{"["}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.reg}>{"{"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                            <span style={Styles.Code.var}>title</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.str}>"Dropdown Tab"</span>
                            <span style={Styles.Code.reg}>, </span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                            <span style={Styles.Code.var}>dropdown</span>
                            <span style={Styles.Code.reg}>{": {"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 80}}>
                            <span style={Styles.Code.var}>drawers</span>
                            <span style={Styles.Code.reg}>{": ["}</span>
                            <span style={Styles.Code.str}>"Drawer1"</span>
                            <span style={Styles.Code.reg}>{","}</span>
                            <span style={Styles.Code.str}>"Drawer2"</span>
                            <span style={Styles.Code.reg}>{","}</span>
                            <span style={Styles.Code.str}>"Drawer3"</span>
                            <span style={Styles.Code.reg}>{"]"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.reg}>{"},"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.str}>"Tab 2"</span>
                            <span style={Styles.Code.reg}>,</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.str}>"Tab 3"</span>
                            <span style={Styles.Code.reg}>,</span>
                        </p>
                        
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.keyword}>{"]"}</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"/>"}</span>
                        </p>
                    </div>
            </div>

            {/* Preamble II */}
            <div>
                <p style={Styles.Fonts.basic}>
                    Now that we've seen some minimalistic Ostrich Tab Bars, let's check out some more complex examples. Below, we will explore two 
                    examples with a relatively compex degree of functionality for each tab.
                    You will see that most of the configuration for TabBars can often end up within the 'tabs' prop as opposed to formal props of their own. 
                    Observe the examples below and you will see how you can program each tab individually from the 'tabs' prop.
                </p>
            </div>

            {/* Ost TabBar Example Row Two */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-around',
                }}>

                    <OstrichTabBar
                        style={{width: 500}}
                        showsActive={false}
                        onTabClick={ ((tab) => {setTotalForTab3((totalForTab3 + tab.value))})}
                        tabs={[
                            {
                                title: "Add 1",
                                hoverStyle: {backgroundColor: "#d1ffdc"},
                                value: 1
                            },
                            {
                                title: "Add 5",
                                hoverStyle: {backgroundColor: "#d1ffdc"},
                                value: 5
                            },
                            {
                                title: (`Total: ${totalForTab3}`),
                                showsHover: false,
                                clickable: false,
                            },
                            {
                                title: "Subtract 1",
                                hoverStyle: {backgroundColor: "#ffdbd1"},
                                value: -1
                            },
                            {
                                title: "Subtract 5",
                                hoverStyle: {backgroundColor: "#ffdbd1"},
                                value: -5
                            },
                        ]}
                    />

                    <OstrichTabBar
                        style={{width: 500}}
                        showsActive={false}
                        onDrawerClick={(drawer) => {
                            console.log(drawer.title, " clicked.")
                            setStyleForTab4({...styleForTab4, [drawer.type]: drawer.value})
                        }}
                        tabs={[
                            {
                                title: "Set Color",
                                dropdown: {
                                    drawers: [
                                        {title: "Red", type: "backgroundColor", value: "#ffdbd1"},
                                        {title: "Green", type: "backgroundColor", value: "#d1ffdc"},
                                        {title: "White", type: "backgroundColor", value: "#fff"}
                                    ]
                                }
                            },
                            {
                                title: "Dynamic Styles!",
                                showsHover: false,
                                clickable: false,
                                style: {...styleForTab4},
                                titleStyle: {...styleForTab4, backgroundColor: 'rgba (0,0,0,0)'},
                                flex: 6
                            },
                            {
                                title: "Set Font Size",
                                dropdown: {
                                    drawers: [
                                        {title: "Small Font", type: "fontSize", value: 12},
                                        {title: "Medium Font", type: "fontSize", value: 16},
                                        {title: "Big Font", type: "fontSize", value: 20}
                                    ]
                                }
                            },
                        ]}
                    />
            </div>
            {/* Ost TabBar Code Row Two */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-around',
                }}>

                    {/* Tab 3 */}
                    <div style={{...Styles.Sections.simpleLessonCode, width: '48.5%'}}>
                        <p style={{...Styles.Code.code, fontSize: 18, marginBottom: 20}}>
                            <span style={Styles.Code.keyword}>const [</span>
                            <span style={Styles.Code.var}>total</span>
                            <span style={Styles.Code.reg}>,</span>
                            <span style={Styles.Code.func}> setTotal</span>
                            <span style={Styles.Code.keyword}>] </span>
                            <span style={Styles.Code.reg}> = </span>
                            <span style={Styles.Code.var}>useState</span>
                            <span style={Styles.Code.keyword}>{"("}</span>
                            <span style={Styles.Code.reg}>0</span>
                            <span style={Styles.Code.keyword}>{")"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstrichDropDown</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>style</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.keyword}>{"{"}</span>
                            <span style={Styles.Code.var}>width</span>
                            <span style={Styles.Code.reg}>: 500</span>
                            <span style={Styles.Code.keyword}>{"}"}</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>showsActive</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.bool}> false</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>onTabClick</span>
                            <span style={Styles.Code.reg}>{": {"}</span>
                            <span style={Styles.Code.keyword}>{"("}</span>
                            <span style={Styles.Code.var}>tab</span>
                            <span style={Styles.Code.keyword}>{") => {"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.func}>setTotal(</span>
                            <span style={Styles.Code.var}>total </span>
                            <span style={Styles.Code.reg}>+ </span>
                            <span style={Styles.Code.var}>tab.value</span>
                            <span style={Styles.Code.func}>)</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.keyword}>{"}"}</span>
                            <span style={Styles.Code.reg}>{"},"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>tabs</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.keyword}>{"["}</span>
                        </p>


                        {/* Tab One */}
                        <div>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.reg}>{"{"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>title</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"Add 1"</span>
                                <span style={Styles.Code.reg}>, </span>
                            </p><p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>value</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.reg}>1</span>
                                <span style={Styles.Code.reg}>, </span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>hoverStyle</span>
                                <span style={Styles.Code.reg}>:</span>
                                <span style={Styles.Code.reg}>{"{"}</span>
                                <span style={Styles.Code.keyword}>{"{"}</span>
                                <span style={Styles.Code.var}> backgroundColor</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"#d1ffdc"</span>
                                <span style={Styles.Code.keyword}>{"}"}</span>
                                <span style={Styles.Code.reg}>{"}"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.reg}>{"},"}</span>
                            </p>
                        </div>
                       
                        {/* Tab Two */}
                        <div>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.reg}>{"{"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>title</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"Add 5"</span>
                                <span style={Styles.Code.reg}>, </span>
                            </p><p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>value</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.reg}>5</span>
                                <span style={Styles.Code.reg}>, </span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>hoverStyle</span>
                                <span style={Styles.Code.reg}>=</span>
                                <span style={Styles.Code.reg}>{"{"}</span>
                                <span style={Styles.Code.keyword}>{"{"}</span>
                                <span style={Styles.Code.var}> backgroundColor</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"#d1ffdc"</span>
                                <span style={Styles.Code.keyword}>{"}"}</span>
                                <span style={Styles.Code.reg}>{"}"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.reg}>{"},"}</span>
                            </p>
                        </div>

                        {/* Tab Three */}
                        <div>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.reg}>{"{"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>title</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>{"`Total: "}</span>
                                <span style={Styles.Code.keyword}>{"${"}</span>
                                <span style={Styles.Code.var}>total</span>
                                <span style={Styles.Code.keyword}>{"}"}</span>
                                <span style={Styles.Code.str}>{"`"}</span>
                                <span style={Styles.Code.reg}>, </span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>showsHover</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.bool}>false</span>
                                <span style={Styles.Code.reg}>{", "}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>clickable</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.bool}>false</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.reg}>{"},"}</span>
                            </p>
                        </div>


                        {/* Tab Four */}
                        <div>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.reg}>{"{"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>title</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"Subtract 1"</span>
                                <span style={Styles.Code.reg}>, </span>
                            </p><p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>value</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.reg}>-1</span>
                                <span style={Styles.Code.reg}>, </span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>hoverStyle</span>
                                <span style={Styles.Code.reg}>=</span>
                                <span style={Styles.Code.reg}>{"{"}</span>
                                <span style={Styles.Code.keyword}>{"{"}</span>
                                <span style={Styles.Code.var}> backgroundColor</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"#ffdbd1"</span>
                                <span style={Styles.Code.keyword}>{"}"}</span>
                                <span style={Styles.Code.reg}>{"}"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.reg}>{"},"}</span>
                            </p>
                        </div>

                        {/* Tab Five */}
                        <div>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.reg}>{"{"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>title</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"Subtract 5"</span>
                                <span style={Styles.Code.reg}>, </span>
                            </p><p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>value</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.reg}>-5</span>
                                <span style={Styles.Code.reg}>, </span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>hoverStyle</span>
                                <span style={Styles.Code.reg}>=</span>
                                <span style={Styles.Code.reg}>{"{"}</span>
                                <span style={Styles.Code.keyword}>{"{"}</span>
                                <span style={Styles.Code.var}> backgroundColor</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"#ffdbd1"</span>
                                <span style={Styles.Code.keyword}>{"}"}</span>
                                <span style={Styles.Code.reg}>{"}"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.reg}>{"},"}</span>
                            </p>
                        </div>

                      
                        
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.keyword}>{"]"}</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"/>"}</span>
                        </p>
                    </div>

                    {/* Tab 4 */}
                    <div style={{...Styles.Sections.simpleLessonCode, width: '48.5%'}}>

                        {/* UseState Style */}
                        <p style={{...Styles.Code.code, fontSize: 18, marginBottom: 20}}>
                            <span style={Styles.Code.keyword}>const [</span>
                            <span style={Styles.Code.var}>tabStyle</span>
                            <span style={Styles.Code.reg}>,</span>
                            <span style={Styles.Code.func}> setTabStyle</span>
                            <span style={Styles.Code.keyword}>] </span>
                            <span style={Styles.Code.reg}> = </span>
                            <span style={Styles.Code.var}>useState</span>
                            <span style={Styles.Code.keyword}>{"("}</span>
                            <span style={Styles.Code.reg}>{"{}"}</span>
                            <span style={Styles.Code.keyword}>{")"}</span>
                        </p>

                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstrichDropDown</span>
                        </p>

                        {/* Style */}
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>style</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.keyword}>{"{"}</span>
                            <span style={Styles.Code.var}>width</span>
                            <span style={Styles.Code.reg}>: 500</span>
                            <span style={Styles.Code.keyword}>{"}"}</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>

                        {/* showsActive */}
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>showsActive</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.bool}> false</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>

                        {/* OnDrawerClick */}
                        <div>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                                <span style={Styles.Code.var}>onDrawerClick</span>
                                <span style={Styles.Code.reg}>{": {"}</span>
                                <span style={Styles.Code.keyword}>{"("}</span>
                                <span style={Styles.Code.var}>drawer</span>
                                <span style={Styles.Code.keyword}>{") => {"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.func}>setTabStyle(</span>
                                <span style={Styles.Code.reg}>{"{..."}</span>
                                <span style={Styles.Code.var}>tabStyle </span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.keyword}>[</span>
                                <span style={Styles.Code.var}>drawer.type</span>
                                <span style={Styles.Code.keyword}>]</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.var}>drawer.value</span>
                                <span style={Styles.Code.reg}>{"}"}</span>
                                <span style={Styles.Code.func}>)</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                                <span style={Styles.Code.keyword}>{"}"}</span>
                                <span style={Styles.Code.reg}>{"},"}</span>
                            </p>
                        </div>
                        
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>tabs</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.keyword}>{"["}</span>
                        </p>

                        {/* Tab One */}
                        <div>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.reg}>{"{"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>title</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"Set Color"</span>
                                <span style={Styles.Code.reg}>, </span>
                            </p>

                            {/* Tab Drop */}
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>dropdown</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.bool}>{"{"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 80}}>
                                <span style={Styles.Code.var}>drawers</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.keyword}>{"["}</span>
                            </p>
                            <div>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 100}}>
                                <span style={Styles.Code.reg}>{"{"}</span>
                                <span style={Styles.Code.var}>title</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.str}>"Red"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>type</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.str}>"backgroundColor"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>value</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.str}>"#ffdbd1"</span>
                                <span style={Styles.Code.reg}>{"}"}</span>
                                <span style={Styles.Code.reg}>, </span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 100}}>
                                <span style={Styles.Code.reg}>{"{"}</span>
                                <span style={Styles.Code.var}>title</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.str}>"Green"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>type</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.str}>"backgroundColor"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>value</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.str}>"#d1ffdc"</span>
                                <span style={Styles.Code.reg}>{"}"}</span>
                                <span style={Styles.Code.reg}>, </span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 100}}>
                                <span style={Styles.Code.reg}>{"{"}</span>
                                <span style={Styles.Code.var}>title</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.str}>"White"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>type</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.str}>"backgroundColor"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>value</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.str}>"#fff"</span>
                                <span style={Styles.Code.reg}>{"}"}</span>
                            </p>
                            </div>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 80}}>
                                <span style={Styles.Code.keyword}>{"]"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.bool}>{"}"}</span>
                            </p>




                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.reg}>{"},"}</span>
                            </p>
                        </div>

                        {/* Tab Two */}
                        <div>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.reg}>{"{"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>title</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>{"`Dynamic Style!"}</span>
                                <span style={Styles.Code.keyword}>{"${"}</span>
                                <span style={Styles.Code.var}>total</span>
                                <span style={Styles.Code.keyword}>{"}"}</span>
                                <span style={Styles.Code.str}>{"`"}</span>
                                <span style={Styles.Code.reg}>, </span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>showsHover</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.bool}>false</span>
                                <span style={Styles.Code.reg}>{", "}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>clickable</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.bool}>false</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>style</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.bool}>{"{"}</span>
                                <span style={Styles.Code.reg}>...</span>
                                <span style={Styles.Code.var}>tabStyle</span>
                                <span style={Styles.Code.bool}>{"}"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>titleStyle</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.bool}>{"{"}</span>
                                <span style={Styles.Code.reg}>...</span>
                                <span style={Styles.Code.var}>tabStyle</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>backgroundColor</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.str}>"rgba (0,0,0,0)"</span>
                                <span style={Styles.Code.bool}>{"}"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>flex</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.reg}>6</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.reg}>{"},"}</span>
                            </p>
                        </div>
                    
                      
                        {/* Tab Three */}
                        <div>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.reg}>{"{"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>title</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"Set Font Size"</span>
                                <span style={Styles.Code.reg}>, </span>
                            </p>

                            {/* Tab Drop */}
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>dropdown</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.bool}>{"{"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 80}}>
                                <span style={Styles.Code.var}>drawers</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.keyword}>{"["}</span>
                            </p>
                            <div>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 100}}>
                                <span style={Styles.Code.reg}>{"{"}</span>
                                <span style={Styles.Code.var}>title</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.str}>"Small Font"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>type</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.str}>"fontSize"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>value</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.reg}>12 </span>
                                <span style={Styles.Code.reg}>{"}"}</span>
                                <span style={Styles.Code.reg}>, </span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 100}}>
                                <span style={Styles.Code.reg}>{"{"}</span>
                                <span style={Styles.Code.var}>title</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.str}>"Medium Font"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>type</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.str}>"fontSize"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>value</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.reg}>16 </span>
                                <span style={Styles.Code.reg}>{"}"}</span>
                                <span style={Styles.Code.reg}>, </span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 100}}>
                                <span style={Styles.Code.reg}>{"{"}</span>
                                <span style={Styles.Code.var}>title</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.str}>"Big Font"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>type</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.str}>"fontSize"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>value</span>
                                <span style={Styles.Code.reg}>{": "}</span>
                                <span style={Styles.Code.reg}>20 </span>
                                <span style={Styles.Code.reg}>{"}"}</span>
                            </p>
                            </div>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 80}}>
                                <span style={Styles.Code.keyword}>{"]"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.bool}>{"}"}</span>
                            </p>




                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.reg}>{"},"}</span>
                            </p>
                        </div>        

                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.keyword}>{"]"}</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"/>"}</span>
                        </p>
                    </div>
            </div>

            {/* Preamble III */}
            <div>
                <p style={Styles.Fonts.basic}>
                    Let's go over what we saw above a bit more. Starting with the Tab Bar on the left; you will notice that the <strong>onTabClick </strong>
                    function takes a parameter called 'tab.' This input value will always be the value of the the 'tab' that you press. 
                    If your 'tabs' are json objects, then the parameter will be the entire json; if your tab is just a string or an int, the value would be that. 
                    In this example, the 'total' state is changed by the 'value' of the clicked tab. 
                </p>
                <p style={Styles.Fonts.basic}>
                    You will also notice that each tab has its own unique 'hoverStyle.' 
                    When using json objects to represent tabs, consider that the expected key/value key names match the props for OstrichDropDowns. 
                    This essentially means that a 'tab' json object optionally expects any of the properties you can provide an OstrichDropDown; including
                    onClick, onMouseEnter, onMouseLeave, style, titleStyle, hoverStyle, hoverTitleStyle, activeStyle, activeTitleStyle, and more.
                </p>
                <p style={Styles.Fonts.basic}>
                    This param depth furthers with the example on the right. Here you will see that there are two tabs with dropdowns; and you will notice the 'drawers' value in the 'dropdown' object in each 'tab' matches how 'drawers' look in OstrichDropDowns!
                </p>
            </div>

            {/* Preamble IV */}
            <div style={{marginTop: 60}}>
                <p style={Styles.Fonts.basic}>
                    Now, let's check out a complicated (and styled) Tab Bar in use. 
                </p>
                <p style={Styles.Fonts.basic}>
                    Below, you will see the same tab bar as the one on top of your screen. We'll go over the code for that as well!
                </p>
            </div>
            <div style={{marginLeft: '20%', width: '60%'}}>
                <HeaderBar />
            </div>
            {/* Header Tab Code */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-around',
                }}>
                    {/* Header Bar Code */}
                    <div style={{...Styles.Sections.simpleLessonCode, width: '70%'}}>
                        
                        <p style={{...Styles.Code.code, fontSize: 18, marginBottom: 20}}>
                            <span style={Styles.Code.keyword}>const </span>
                            <span style={Styles.Code.keyword}>{"["}</span>
                            <span style={Styles.Code.var}>router</span>
                            <span style={Styles.Code.reg}> = </span>
                            <span style={Styles.Code.func}>useRouter()</span>
                        </p>

                         {/* TABS CONST */}
                         <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.keyword}>const </span>
                            <span style={Styles.Code.keyword}>{"["}</span>
                            <span style={Styles.Code.var}>tabBar</span>
                            <span style={Styles.Code.reg}>, </span>
                            <span style={Styles.Code.func}>setTabBar</span>
                            <span style={Styles.Code.keyword}>{"]"}</span>
                            <span style={Styles.Code.reg}> = </span>
                            <span style={Styles.Code.var}>useState</span>
                            <span style={Styles.Code.reg}>{"("}</span>
                            <span style={Styles.Code.bool}>false</span>
                            <span style={Styles.Code.reg}>{")"}</span>
                        </p>


                        {/* TABS CONST */}
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.keyword}>const </span>
                            <span style={Styles.Code.var}>tabs</span>
                            <span style={Styles.Code.reg}> = </span>
                            <span style={Styles.Code.keyword}>[</span>
                        </p>
                        

                        {/* Tab one */}
                        <div>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                                <span style={Styles.Code.comment}>// Concepts Tab</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                                <span style={Styles.Code.var}>{"{"}</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.var}>title</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"Concepts"</span>
                                <span style={Styles.Code.reg}>,</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.func}>onClick</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.keyword}>{"() => {"}</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.func}>setTabBar(</span>
                                <span style={Styles.Code.str}>"Concepts"</span>
                                <span style={Styles.Code.func}>)</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>router</span>
                                <span style={Styles.Code.reg}>.</span>
                                <span style={Styles.Code.func}>replace</span>
                                <span style={Styles.Code.func}>(</span>
                                <span style={Styles.Code.str}>"/concepts/list"</span>
                                <span style={Styles.Code.func}>)</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.keyword}>{"}"}</span>
                                <span style={Styles.Code.reg}>,</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.var}>dropdown</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.keyword}>{"{"}</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>openOnHover</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.bool}>true</span>
                                <span style={Styles.Code.reg}>,</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>drawers</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.keyword}>{"["}</span>
                                <span style={Styles.Code.str}>"Basics"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.str}>"Functions"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.str}>"Arrays and Lists"</span>
                                <span style={Styles.Code.reg}> . . . </span>
                                <span style={Styles.Code.keyword}>{"]"}</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.func}>onDrawerClick</span>
                                <span style={Styles.Code.reg}>: (</span>
                                <span style={Styles.Code.var}>drawer</span>
                                <span style={Styles.Code.reg}>{") "}</span>
                                <span style={Styles.Code.keyword}>{"=> "}</span>
                                <span style={Styles.Code.var}>{"{ "}</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 80}}>
                                <span style={Styles.Code.func}>handleDrawerClick(</span>
                                <span style={Styles.Code.str}>'concepts'</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>drawer</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>router</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>setTabBar</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.str}>"menu"</span>
                                <span style={Styles.Code.func}>{")"}</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>{"}"}</span>
                                <span style={Styles.Code.reg}>, </span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.keyword}>{"}"}</span>
                                <span style={Styles.Code.reg}>{","}</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                                <span style={Styles.Code.var}>{"}"}</span>
                                <span style={Styles.Code.reg}>{","}</span>
                            </p>
                        </div>

                        {/* Tab two */}
                        <div>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                                <span style={Styles.Code.comment}>// Languages Tab</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                                <span style={Styles.Code.var}>{"{"}</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.var}>title</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"Languages"</span>
                                <span style={Styles.Code.reg}>,</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.func}>onClick</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.keyword}>{"() => {"}</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.func}>setTabBar(</span>
                                <span style={Styles.Code.str}>"Languages"</span>
                                <span style={Styles.Code.func}>)</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>router</span>
                                <span style={Styles.Code.reg}>.</span>
                                <span style={Styles.Code.func}>replace</span>
                                <span style={Styles.Code.func}>(</span>
                                <span style={Styles.Code.str}>"/languages/list"</span>
                                <span style={Styles.Code.func}>)</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.keyword}>{"}"}</span>
                                <span style={Styles.Code.reg}>,</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.var}>dropdown</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.keyword}>{"{"}</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>openOnHover</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.bool}>true</span>
                                <span style={Styles.Code.reg}>,</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>drawers</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.keyword}>{"["}</span>
                                <span style={Styles.Code.str}>"JavaScript"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.str}>"Ruby"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.str}>"Python"</span>
                                <span style={Styles.Code.reg}> . . . </span>
                                <span style={Styles.Code.keyword}>{"]"}</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.func}>onDrawerClick</span>
                                <span style={Styles.Code.reg}>: (</span>
                                <span style={Styles.Code.var}>drawer</span>
                                <span style={Styles.Code.reg}>{") "}</span>
                                <span style={Styles.Code.keyword}>{"=> "}</span>
                                <span style={Styles.Code.var}>{"{ "}</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 80}}>
                                <span style={Styles.Code.func}>handleDrawerClick(</span>
                                <span style={Styles.Code.str}>'languages'</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>drawer</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>router</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>setTabBar</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.str}>"menu"</span>
                                <span style={Styles.Code.func}>{")"}</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                                <span style={Styles.Code.var}>{"}"}</span>
                                <span style={Styles.Code.reg}>, </span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.keyword}>{"}"}</span>
                                <span style={Styles.Code.reg}>{","}</span>
                            </p>

                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                                <span style={Styles.Code.var}>{"}"}</span>
                                <span style={Styles.Code.reg}>{","}</span>
                            </p>
                        </div>

                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>{"{"}</span>
                            <span style={Styles.Code.reg}>{". . ."}</span>
                            <span style={Styles.Code.var}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginBottom: 20}}>
                            <span style={Styles.Code.keyword}>{"]"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.keyword}>function </span>
                            <span style={Styles.Code.func}>handleDrawerClick(</span>
                            <span style={Styles.Code.var}>type</span>
                            <span style={Styles.Code.reg}>, </span>
                            <span style={Styles.Code.var}>drawer</span>
                            <span style={Styles.Code.reg}>, </span>
                            <span style={Styles.Code.var}>router</span>
                            <span style={Styles.Code.reg}>, </span>
                            <span style={Styles.Code.var}>setTabBar</span>
                            <span style={Styles.Code.func}>{"){"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>router</span>
                            <span style={Styles.Code.reg}>.</span>
                            <span style={Styles.Code.func}>replace(</span>
                            <span style={Styles.Code.str}>`/</span>
                            <span style={Styles.Code.keyword}>{"${"}</span>
                            <span style={Styles.Code.var}>type</span>
                            <span style={Styles.Code.keyword}>{"}"}</span>
                            <span style={Styles.Code.str}>/</span>
                            <span style={Styles.Code.keyword}>{"${"}</span>
                            <span style={Styles.Code.var}>drawer</span>
                            <span style={Styles.Code.func}>.toLowerCase()</span>
                            <span style={Styles.Code.keyword}>{"}"}</span>
                            <span style={Styles.Code.str}>/menu'</span>\
                            <span style={Styles.Code.func}>)</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.func}>setTabBar(</span>
                            <span style={Styles.Code.bool}>false</span>
                            <span style={Styles.Code.func}>)</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginBottom: 20}}>
                            <span style={Styles.Code.func}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstrichTabBar</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>startingTanByTitile</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.var}>tabBar</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                            <span style={Styles.Code.var}>tabs</span>
                            <span style={Styles.Code.reg}>=</span>
                            <span style={Styles.Code.reg}>{"{"}</span>
                            <span style={Styles.Code.var}>tabs</span>
                            <span style={Styles.Code.reg}>{"}"}</span>
                        </p>

                        
                        {/* style */}
                        <div>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                                <span style={Styles.Code.var}>style</span>
                                <span style={Styles.Code.reg}>=</span>
                                <span style={Styles.Code.reg}>{"{"}</span>
                                <span style={Styles.Code.keyword}>{"{"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.var}>height</span>
                                <span style={Styles.Code.reg}>: 55, </span>
                                <span style={Styles.Code.var}>width</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"100%"</span>
                                <span style={Styles.Code.reg}>,</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.var}>boxShadow</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"5px 10px 15px 5px rgba(40,40,40, 0.4)"</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                                <span style={Styles.Code.keyword}>{"}"}</span>
                                <span style={Styles.Code.reg}>{"}"}</span>
                            </p>
                        </div>


                        {/* titleStyle */}
                        <div>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                                <span style={Styles.Code.var}>titleStyle</span>
                                <span style={Styles.Code.reg}>=</span>
                                <span style={Styles.Code.reg}>{"{"}</span>
                                <span style={Styles.Code.keyword}>{"{"}</span>

                                <span style={Styles.Code.var}>fontFamily</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"Gilroy"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>fontWeight</span>
                                <span style={Styles.Code.reg}>: 500,  </span>
                                <span style={Styles.Code.var}>fontSize</span>
                                <span style={Styles.Code.reg}>: 17,  </span>
                                <span style={Styles.Code.var}> color</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"white"</span>

                                <span style={Styles.Code.keyword}>{"}"}</span>
                                <span style={Styles.Code.reg}>{"}"}</span>
                            </p>
                        </div>

                        {/* activeTitleStyle */}
                        <div>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                                <span style={Styles.Code.var}>activeTitleStyle</span>
                                <span style={Styles.Code.reg}>=</span>
                                <span style={Styles.Code.reg}>{"{"}</span>
                                <span style={Styles.Code.keyword}>{"{"}</span>

                                <span style={Styles.Code.var}>fontWeight</span>
                                <span style={Styles.Code.reg}>: 700,  </span>
                                <span style={Styles.Code.var}> color</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"lime"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>fontSize</span>
                                <span style={Styles.Code.reg}>: 18,  </span>

                                <span style={Styles.Code.keyword}>{"}"}</span>
                                <span style={Styles.Code.reg}>{"}"}</span>
                            </p>
                        </div>

                         {/* hoverTitleStyle */}
                        <div>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                                <span style={Styles.Code.var}>hoverTitleStyle</span>
                                <span style={Styles.Code.reg}>=</span>
                                <span style={Styles.Code.reg}>{"{"}</span>
                                <span style={Styles.Code.keyword}>{"{"}</span>

                                <span style={Styles.Code.var}>fontWeight</span>
                                <span style={Styles.Code.reg}>: 600,  </span>
                                <span style={Styles.Code.var}> color</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"lime"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>fontSize</span>
                                <span style={Styles.Code.reg}>: 18,  </span>

                                <span style={Styles.Code.keyword}>{"}"}</span>
                                <span style={Styles.Code.reg}>{"}"}</span>
                            </p>
                        </div>

                        {/* tabStyle */}
                        <div>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                                <span style={Styles.Code.var}>tabStyle</span>
                                <span style={Styles.Code.reg}>=</span>
                                <span style={Styles.Code.reg}>{"{"}</span>
                                <span style={Styles.Code.keyword}>{"{"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.var}>borderRight</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"1px solid white"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>borderLeft</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"1px solid white"</span>
                                <span style={Styles.Code.reg}>, </span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.var}> backgroundColor</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"#11013b"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}> color</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"#efefef"</span>
                                <span style={Styles.Code.reg}>, </span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.var}>borderRadius</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.reg}>0, </span>
                                <span style={Styles.Code.var}> padding</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.reg}>0 </span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                                <span style={Styles.Code.keyword}>{"}"}</span>
                                <span style={Styles.Code.reg}>{"}"}</span>
                            </p>
                        </div>

                        {/* hoverTabStyle */}
                        <div>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                                <span style={Styles.Code.var}>hoverTabStyle</span>
                                <span style={Styles.Code.reg}>=</span>
                                <span style={Styles.Code.reg}>{"{"}</span>
                                <span style={Styles.Code.keyword}>{"{"}</span>
                                <span style={Styles.Code.var}> backgroundColor</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"#11013b"</span>
                                <span style={Styles.Code.keyword}>{"}"}</span>
                                <span style={Styles.Code.reg}>{"}"}</span>
                            </p>
                        </div>

                        {/* activeTabStyle */}
                        <div>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                                <span style={Styles.Code.var}>activeTabStyle</span>
                                <span style={Styles.Code.reg}>=</span>
                                <span style={Styles.Code.reg}>{"{"}</span>
                                <span style={Styles.Code.keyword}>{"{"}</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.var}>borderRight</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"3px solid lime"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}>borderLeft</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"3px solid lime"</span>
                                <span style={Styles.Code.reg}>, </span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.var}> backgroundColor</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"#11013b"</span>
                                <span style={Styles.Code.reg}>, </span>
                                <span style={Styles.Code.var}> color</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"lime"</span>
                                <span style={Styles.Code.reg}> </span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                                <span style={Styles.Code.keyword}>{"}"}</span>
                                <span style={Styles.Code.reg}>{"}"}</span>
                            </p>
                        </div>

                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"/>"}</span>
                        </p>
                        
                    </div>
            </div>

            {/* Props */}
            <div style={{...Styles.Fonts.lessonSubHeader, marginTop: 60}}>
                OstrichTabBar Props
            </div>

            {/* Props Row One */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
                height: 140,
                gap: 15
            }}>
                <OstCard style={Styles.Sections.propCardObj}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>tabStyle</span>
                            <span style={Styles.Fonts.h2}> - Object</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional) </span> 
                            An object that will style each tab bar when not active, hovered, or overriden by individual tab style
                        </p>
                    </div>
                </OstCard>
               
                <OstCard style={Styles.Sections.propCardObj}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>activeTabStyle</span>
                            <span style={Styles.Fonts.h2}> - Object</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional) </span> 
                            An object that will style each tab bar when active, unless overriden by an individual tab activeStyle
                        </p>
                    </div>
                </OstCard>
                
                <OstCard style={Styles.Sections.propCardObj}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>hoverTabStyle</span>
                            <span style={Styles.Fonts.h2}> - Object</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional) </span> 
                            An object that will style each tab bar when hovered (and not opened or active), unless overriden by an individual tab hoverStyle
                        </p>
                    </div>
                </OstCard>
            </div>

            {/* Props Row Two */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
                height: 140,
                gap: 15
            }}>
                <OstCard style={Styles.Sections.propCardObj}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>drawerStyle</span>
                            <span style={Styles.Fonts.h2}> - Object</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional) </span> 
                            An object that will style each dropdown drawer (if any) when not active, hovered, or overriden by individual drawer style or dropdown drawerStyle
                        </p>
                    </div>
                </OstCard>
               
                <OstCard style={Styles.Sections.propCardObj}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>activeDrawerStyle</span>
                            <span style={Styles.Fonts.h2}> - Object</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional) </span> 
                            An object that will style each dropdown drawer when active, unless overriden by an individual drawer activeStyle or dropdown activeDrawerStyle
                        </p>
                    </div>
                </OstCard>
                
                <OstCard style={Styles.Sections.propCardObj}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>hoverDrawerStyle</span>
                            <span style={Styles.Fonts.h2}> - Object</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional) </span> 
                            An object that will style each dropdown drawer when hovered, unless overriden by an individual drawer hoverStyle or dropdown hoverDrawerStyle
                        </p>
                    </div>
                </OstCard>
            </div>

            {/* Props Row Three */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
                height: 140,
                gap: 15
            }}>
                <OstCard style={Styles.Sections.propCardObj}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>titleStyle</span>
                            <span style={Styles.Fonts.h2}> - Object</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional) </span> 
                            An object that will style each Tab Title when not active or hovered, unless overriden by an individual tab titleStyle
                        </p>
                    </div>
                </OstCard>
               
                <OstCard style={Styles.Sections.propCardObj}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>activeTitleStyle</span>
                            <span style={Styles.Fonts.h2}> - Object</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional) </span> 
                            An object that will style each Tab Title when active, unless overriden by an individual tab activeTitleStyle
                        </p>
                    </div>
                </OstCard>
                
                <OstCard style={Styles.Sections.propCardObj}>
                <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>hoverTitleStyle</span>
                            <span style={Styles.Fonts.h2}> - Object</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional) </span> 
                            An object that will style each Tab Title when hovered, unless overriden by an individual tab hoverTitleStyle
                        </p>
                    </div>
                </OstCard>
            </div>

            {/* Props Row Four */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
                height: 140,
                gap: 15
            }}>
                <OstCard style={Styles.Sections.propCardFunc}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>onTabClick</span>
                            <span style={Styles.Fonts.h2}> - Function</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional) </span> 
                            A function (that takes the entire Tab JSON or value as a param) that runs whenever a Tab in the Tab Bar is clicked
                        </p>
                    </div>
                </OstCard>
               
                <OstCard style={Styles.Sections.propCardFunc}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>onTabHover</span>
                            <span style={Styles.Fonts.h2}> - Function</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional) </span> 
                            A function (that takes the entire Tab JSON or value as a param) that runs whenever a Tab in the Tab Bar is hovered
                        </p>
                    </div>
                </OstCard>
                
                <OstCard style={Styles.Sections.propCardFunc}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>onDrawerClick</span>
                            <span style={Styles.Fonts.h2}> - Function</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>(Optional) </span> 
                            A function (that takes the entire Drawer JSON or value as a param) that runs whenever a Drawer in a Drop Tab's Dropdown menu is clicked
                        </p>
                    </div>
                </OstCard>
            </div>

            {/* Props Row Five */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
                height: 140,
                gap: 15
            }}>
                <OstCard style={Styles.Sections.propCardBool}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>tabDeactivates</span>
                            <span style={Styles.Fonts.h2}> - Boolean</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>DEFAULTS TO FALSE </span> 
                            If true, this allows tabs to go from 'active' to 'inactive' by clicking an already active tab. If this is false, the only way to deactivate a tab is by clicking another.
                        </p>
                    </div>
                </OstCard>
               
                <OstCard style={Styles.Sections.propCardBool}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>showsHover</span>
                            <span style={Styles.Fonts.h2}> - Boolean</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                            <span style={{fontWeight: 600}}>DEFAULTS TO TRUE </span> 
                            If false, Tabs and their text will not change styles when hovered
                        </p>
                    </div>
                </OstCard>
                
                <OstCard style={Styles.Sections.propCardBool}>
                    <div>
                        <p style={{textAlign: 'center'}}>
                            <span style={Styles.Fonts.h3}>showsActive</span>
                            <span style={Styles.Fonts.h2}> - Boolean</span>
                        </p>
                        <p style={{...Styles.Fonts.basic, marginTop: 10, textAlign: 'center', fontSize: 15}}>
                        <span style={{fontWeight: 600}}>DEFAULTS TO TRUE </span> 
                            If false, Tabs and their text will not change styles when active / opened
                        </p>
                    </div>
                </OstCard>
            </div>


        </div>
    )
  }

  /////////////////
  // Main Return //
  /////////////////

  return (
    <div style={{marginTop: 20}}>
     <div style={Styles.Fonts.pageTitle}>The Ostrich React Component Library</div>
     <div style={{display: 'flex', flexDirection: 'row'}}>
        <OstCard style={{margin: "30px", flex: 10}}>
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

                {renderOstrichCards()}  
                {renderOstrichDropDown()}            
                {renderOstrichTabBar()}  
            </div>
            
        </OstCard>


        {/* Side Menu */}
        <OstCard style={{marginTop: 30, marginRight: 30, flex: 2}}>

        </OstCard>
     </div>
    </div>
  );
}
