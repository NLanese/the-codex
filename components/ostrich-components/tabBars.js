import React, {useEffect, useState} from "react";
import Styles from "../../styles/styles";

import { HeaderBar } from "./components/Global/headerBar";
 

// Ostrich
import { OstCard } from "../../OstrichComponents/Format/OstCard";
import { OstrichTabBar } from "../../OstrichComponents/Tabs/OstrichTabBar";

export default function TabBarsShowcase(){

    const [totalForTab3, setTotalForTab3] = useState(0)
    const [styleForTab4, setStyleForTab4] = useState({})
  

    return(
        <div style={{marginBottom: 15, marginTop: 15 }}>
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