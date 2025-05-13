import React, {useEffect, useState} from "react";
import Styles from "../../styles/styles";

import { OstrichForm } from "../../OstrichComponents/Forms/OstrichForm";

export default function OstFormsShowcase(){

    ///////////
    // State //
    ///////////

    const [text1, setText1] = useState("")
    const [text2, setText2] = useState("")
    const [text3, setText3] = useState("")
    const [validText, setValidText] = useState(null)

    useEffect(() => {
        determinePassword(text3)
    }, [text3])

    ///////////////
    // Functions //
    ///////////////

    function determinePassword(input){
        if (input.length < 4){
            return null
        }
        const hasUppercase = /[A-Z]/.test(input);
        const hasLowercase = /[a-z]/.test(input);
        const hasNumber    = /[0-9]/.test(input);
        const hasSpecial   = /[^A-Za-z0-9]/.test(input); 

        console.log(hasUppercase, " ", hasLowercase, " ", hasNumber, " ", hasSpecial)
        if (hasUppercase && hasLowercase && hasNumber && hasSpecial){
            console.log("Returning true")
            return true
        }
        else{ 
            console.log("Returning False")
            return false
        }
    }


    /////////////////
    // Main Return //
    /////////////////

    return(
        <div style={{marginBottom: 30}}>
            <div style={Styles.Fonts.lessonHeader}>Ostrich Forms (OstrichForm)</div>

            {/* Preamble */}
            <p style={Styles.Fonts.basic}>
                Ostrich Forms are versatile Components that allow developers to create either minimal or complex user-input zones, 
                as well as fire a function on the submission of those inputs. Through an Ostrich Form, you can display numerous different
                inputs and input types. Ostrich Forms support Multiple Choice (Multi and Singular Selection), text input, toggle fields, and more. 
            </p>

            <p style={Styles.Fonts.basic}>
                Lets start by going over some very simple and basic examples, before moving on to more complex instances of Ostrich Forms
            </p>

            <OstrichForm 
                title="Example Form"
                style={{width: '70%', marginLeft: '15%'}}
                fields={[
                    {
                        title: "Email",
                        placeholder: "example@email.com",
                        type: "text",
                        onChange: ((value) => {
                            setText1(value)
                        }),
                        value: text1,
                        validResponse: (value) => {
                            if (value.includes("@") && value.includes(".")){
                                return true
                            }
                            else{
                                return false
                            }
                        }
                    },
                    {
                        title: "Account Alias",
                        caption: "(Optional)",
                        moreText: "A username that will be displayed to other accounts instead of your email",
                        placeholder: "Stephen_B_Smith",
                        type: "text",
                        onChange: ((value) => setText2(value)),
                        value: text2,
                        required: false,
                        validResponse: () => true
                    },
                    {
                        title: "Password",
                        type: "password",
                        onChange: ((value) => setText3(value)),
                        value: text3,
                        validResponse: determinePassword
                    },

                ]}
            />

                <div style={{...Styles.Sections.simpleLessonCode, width: '72%', marginLeft: '15%'}}>
                    <p style={{...Styles.Code.code, fontSize: 18}}>
                        <span style={Styles.Code.reg}>{"<"}</span>
                        <span style={Styles.Code.keyword}>OstrichForm</span>
                    </p>
                    <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                        <span style={Styles.Code.var}>title</span>
                        <span style={Styles.Code.reg}>=</span>
                        <span style={Styles.Code.str}>"Example Form"</span>
                    </p>
                    <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                        <span style={Styles.Code.var}>style</span>
                        <span style={Styles.Code.reg}>=</span>
                        <span style={Styles.Code.var}>{"{"}</span>
                        <span style={Styles.Code.func}>{"{"}</span>
                        <span style={Styles.Code.var}>width</span>
                        <span style={Styles.Code.reg}>: </span>
                        <span style={Styles.Code.str}>"70%"</span>
                        <span style={Styles.Code.reg}>, </span>
                        <span style={Styles.Code.var}>marginLeft</span>
                        <span style={Styles.Code.reg}>: </span>
                        <span style={Styles.Code.str}>"15%"</span>
                        <span style={Styles.Code.func}>{"}"}</span>
                        <span style={Styles.Code.var}>{"}"}</span>
                    </p>
                    <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 20}}>
                        <span style={Styles.Code.var}>fields</span>
                        <span style={Styles.Code.reg}>=</span>
                        <span style={Styles.Code.var}>{"{"}</span>
                        <span style={Styles.Code.func}>{"["}</span>
                    </p>

                    {/* Field One */}
                    <div>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.keyword}>{"{"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                            <span style={Styles.Code.var}>title</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.str}>"Email"</span>
                            <span style={Styles.Code.reg}>, </span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                            <span style={Styles.Code.var}>placeholder</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.str}>"example@gmail.com"</span>
                            <span style={Styles.Code.reg}>, </span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                            <span style={Styles.Code.var}>type</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.str}>"text"</span>
                            <span style={Styles.Code.reg}>, </span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                            <span style={Styles.Code.func}>onChange</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.var}>{"("}</span>
                            <span style={Styles.Code.func}>{"("}</span>
                            <span style={Styles.Code.var}>value</span>
                            <span style={Styles.Code.func}>{")"}</span>
                            <span style={Styles.Code.keyword}>{" => "}</span>
                            <span style={Styles.Code.func}>{"{"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 80}}>
                            <span style={Styles.Code.func}>setText1</span>
                            <span style={Styles.Code.keyword}>{"("}</span>
                            <span style={Styles.Code.var}>value</span>
                            <span style={Styles.Code.keyword}>{")"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                            <span style={Styles.Code.func}>{"}"}</span>
                            <span style={Styles.Code.var}>{")"}</span>
                            <span style={Styles.Code.reg}>, </span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                            <span style={Styles.Code.var}>value</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.var}>text1</span>
                            <span style={Styles.Code.reg}>, </span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                            <span style={Styles.Code.func}>validResponse</span>
                            <span style={Styles.Code.reg}>: </span>
                            <span style={Styles.Code.var}>{"("}</span>
                            <span style={Styles.Code.var}>value</span>
                            <span style={Styles.Code.var}>{")"}</span>
                            <span style={Styles.Code.keyword}>{" => "}</span>
                            <span style={Styles.Code.func}>{"{"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 80}}>
                            <span style={Styles.Code.keyword}>if </span>
                            <span style={Styles.Code.func}>{"("}</span>
                            <span style={Styles.Code.var}>value</span>
                            <span style={Styles.Code.reg}>.</span>
                            <span style={Styles.Code.var}>includes</span>
                            <span style={Styles.Code.keyword}>{"("}</span>
                            <span style={Styles.Code.str}>"@"</span>
                            <span style={Styles.Code.keyword}>{")"}</span>
                            <span style={Styles.Code.reg}> && </span>
                            <span style={Styles.Code.var}>value</span>
                            <span style={Styles.Code.reg}>.</span>
                            <span style={Styles.Code.var}>includes</span>
                            <span style={Styles.Code.keyword}>{"("}</span>
                            <span style={Styles.Code.str}>"."</span>
                            <span style={Styles.Code.keyword}>{")"}</span>
                            <span style={Styles.Code.func}>{")"}</span>
                            <span style={Styles.Code.var}>{" {"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 100}}>
                            <span style={Styles.Code.keyword}>return</span>
                            <span style={Styles.Code.bool}> true</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 80}}>
                            <span style={Styles.Code.var}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 80}}>
                            <span style={Styles.Code.keyword}>else </span>
                            <span style={Styles.Code.var}>{" {"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 100}}>
                            <span style={Styles.Code.keyword}>return</span>
                            <span style={Styles.Code.bool}> false</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 80}}>
                            <span style={Styles.Code.var}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 60}}>
                            <span style={Styles.Code.func}>{"}"}</span>
                        </p>
                        <p style={{...Styles.Code.code, fontSize: 18, marginLeft: 40}}>
                            <span style={Styles.Code.keyword}>{"}"}</span>
                            <span style={Styles.Code.reg}>{","}</span>
                        </p>
                    </div>
                    
                    
                </div>

        </div>
    )
}