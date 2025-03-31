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
import { OstrichDropDown } from "../../../OstrichComponents/Dropdown/OstrichDropDown";
import { OstrichTabBar } from "../../../OstrichComponents/Tabs/OstrichTabBar";

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


  ////////////////
  // UseEffects //
  ////////////////

  useEffect(() => {
    setDirectory(false)
  }, [])

  ////////////////
  // Renderings //
  ////////////////

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

  function renderOstrichToggles(){

  }

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


        </div>
    )
  }

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
                            2, 
                            3
                        ]}
                    />
            </div>


            {/* Ost TabBar Code Row One */}
            <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-around',
                }}>
                    {/* Template One */}
                    <div style={{...Styles.Sections.simpleLessonCode, width: '33%'}}>
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
                    <div style={{...Styles.Sections.simpleLessonCode, width: '35%'}}>
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
                            <span style={Styles.Code.reg}>{"2,"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.reg}>{"3"}</span>
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

            <div>
            <p style={Styles.Fonts.basic}>
            Now we will go over more complicated Tab Bars; showing you exactly how the header bar for this site was coded. 
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

             {/* Ost TabBar Code Row One */}
             <div style={{display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-around',
                }}>
                    {/* Template One */}
                    <div style={{...Styles.Sections.simpleLessonCode, width: '70%'}}>
                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"<"}</span>
                            <span style={Styles.Code.keyword}>OstrichTabBar</span>
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
                                <span style={Styles.Code.reg}>: 40, </span>
                                <span style={Styles.Code.var}>width</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"99%"</span>
                                <span style={Styles.Code.reg}>,</span>
                            </p>
                            <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                                <span style={Styles.Code.var}>backgroundColor</span>
                                <span style={Styles.Code.reg}>: </span>
                                <span style={Styles.Code.str}>"#11013b"</span>
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

                                <span style={Styles.Code.keyword}>{"}"}</span>
                                <span style={Styles.Code.reg}>{"}"}</span>
                            </p>
                        </div>

                        <p style={{...Styles.Code.code, fontSize: 18}}>
                            <span style={Styles.Code.reg}>{"/>"}</span>
                        </p>
                        
                    </div>
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
