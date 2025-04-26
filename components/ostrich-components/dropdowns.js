import React, {useEffect, useState} from "react";
import Styles from "../../styles/styles";
import { OstrichDropDown } from "../../OstrichComponents/Dropdown/OstrichDropDown";
import { OstCard } from "../../OstrichComponents/Format/OstCard";


export default function DropdownShowcase(){
    const [titleForDrop3, setTitleForDrop3] = useState("Dynamic Title")
    const [colorForDrop4, setColorForDrop4] = useState("white")
    const [totalForDrop5, setTotalForDrop5] = useState(0)


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
                                <li>clickable</li>
                                <li>manualOnClick</li>
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