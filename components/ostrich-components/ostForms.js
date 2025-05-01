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
                            full = 
                            setText1(value)
                        }),
                        value: text1,
                    },
                    {
                        title: "Account Alias",
                        caption: "(Optional)",
                        moreText: "A username that will be displayed to other accounts instead of your email",
                        placeholder: "Stephen_B_Smith",
                        type: "text",
                        onChange: (() => setText2(value)),
                        value: text2,
                        required: 'false',
                    },
                    {
                        title: "Password",
                        type: "password",
                        onChange: (() => setText3(value)),
                        value: text3,
                    },

                ]}
            />

        </div>
    )
}