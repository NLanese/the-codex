// React
import React, {useEffect, useState} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { tokenState, tabBarState, directoryDataState } from "../../../recoil/atoms";

// Styles 
import Styles from "../../../styles/styles";

// Ostrich
import { OstCard } from "../../../OstrichComponents/Format/OstCard";

// Showcase Elements
import TabBarsShowcase from "../../../components/ostrich-components/tabBars";
import OstCardShowcase from "../../../components/ostrich-components/ostCards";
import DropdownShowcase from "../../../components/ostrich-components/dropdowns";  
import OstFormsShowcase from "../../../components/ostrich-components/ostForms";

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
    return <OstCardShowcase />
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
    return <DropdownShowcase />
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
                <OstFormsShowcase />
            </div>
            
        </OstCard>


        {/* Side Menu */}
        <OstCard style={{marginTop: 30, marginRight: 30, flex: 2}}>

        </OstCard>
     </div>
    </div>
  );
}
