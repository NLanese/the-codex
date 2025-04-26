import React, {useEffect, useState} from "react";
import Styles from "../../styles/styles";

import { OstrichForm } from "../../OstrichComponents/Forms/OstrichForm";

export default function OstFormsShowcase(){

    ///////////
    // State //
    ///////////

    const [text1, setText1] = useState("")

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
                fields={[{
                    title: "Email",
                    caption: "(Optional)",
                    placeholder: "example@email.com",
                    type: "text",
                    onChange: ((value) => setText1(value)),
                    value: text1,
                  }]}
            />

        </div>
    )
}