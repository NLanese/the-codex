import React, {useEffect, useState} from "react";
import Styles from "../../styles/styles";

// Assets
const OstCompImg = "../../assets/icons/big/OstrichComponentsLogo.png";



// Ostrich
import { OstCard } from "../../OstrichComponents/Format/OstCard";

export default function OstCardShowcase(){
    return(
        <div style={{marginBottom: 30}}>
        <div style={{...Styles.Sections.lessonContent, marginLeft: '5%', width: '80%'}}>
            <div style={Styles.Fonts.lessonHeader}>Ostrich Cards (OstCards)</div>
                
                {/* Preamble */}
                <p style={Styles.Fonts.basicX}>
                Ostrich Cards are the Ostrich Framework's take on a View. They have predetermined padding and a box shadow to add an elevated visual effect. They are meant to be 
                versatile compoonents for a wide variety of uses, so by adding an 'onClick' function to an OstCard component you automatically make it behave and animate like a button. 
                </p>
                <p style={Styles.Fonts.basicX}>
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
                    <p style={Styles.Fonts.basicX}>
                        As you see, adding an <strong>onClick</strong> property automatically transfroms the entire component into a button.
                        Additionally, you see that developers can still add their own custom styles to Ostrich Cards, while not removing the padding or shadow features the card has by default. 
                    </p>
                    <p style={Styles.Fonts.basicX}>
                        Ostrich Cards are also a great way to display pictures, as they take image inputs and have several different template options to help your image be 
                        displayed exactly how you would like it to be
                    </p>
                    <p style={Styles.Fonts.basicX}>
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
        </div>
    )
}