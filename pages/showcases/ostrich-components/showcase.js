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

// Assets
const OstCompImg = "../../../assets/icons/big/OstrichComponentsLogo.png";

// Showcase Elements
import TabBarsShowcase from "../../../components/ostrich-components/tabBars";

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

    // Sets Directory
    useEffect(() => {
        setDirectory("Portfolio")            
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
    return <TabBarsShowcase />
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
