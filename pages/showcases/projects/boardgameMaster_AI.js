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

export default function BoardGameMasterAIProjectPage() {


return (
    <div style={{marginTop: 20}}>
     <div style={Styles.Fonts.pageTitle}>The Board Game Master AI</div>
     <div style={{display: 'flex', flexDirection: 'row'}}>
        <OstCard style={{margin: "30px", flex: 10}}>
            <div style={Styles.Sections.lessonContent}>
                <p style={Styles.Fonts.basic}>
                Below is a Chat Bot designed to answer your questions about any of the board games we have listed! 
                Simply select a board game from the dropdown menu and enter your question in the text field. 
                Once complete, press submit and wait for the Board Game Master to give you a response!
                </p>

                <p style={Styles.Fonts.basic}>
                This bot was deisgned using Amazon Bedrock. Its knowledge base was compiled by Nick Lanese but all the content was 
                information from the respecitve board games' official rules (when applicable).
                </p>

                <p style={Styles.Fonts.basic}>
                The LLM at use is Titan Text Express and I am using Titan Embedding v2 to extract the information from the knowledge base. 
                </p>
            </div>
            
        </OstCard>


        {/* Side Menu */}
        <OstCard style={{marginTop: 30, marginRight: 30, flex: 2}}>

        </OstCard>
     </div>
    </div>
  );
}