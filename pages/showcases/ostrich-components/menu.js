// React
import React, {useEffect} from "react";
import { useRouter } from "next/router";


// Recoil
import { useRecoilState } from "recoil";
import { tokenState, tabBarState, directoryDataState } from "../../../recoil/atoms";

// Styles 
import Styles from "../../../styles/styles";
import { OstCard } from "../../../OstrichComponents/Format/OstCard";
import { FormMultipleChoice } from "../../../OstrichComponents/Forms/FormMultipleChoice"

// Ostrich
// import { OstCard } from "../../../OstrichComponents/Format/OstCard";
// import { OstrichDropDown } from "../../../OstrichComponents/Dropdown/OstrichDropDown";
// import { OstrichTabBar } from "../../../OstrichComponents/Tabs/OstrichTabBar";
// import { HeaderBar } from "../../../components/Global/headerBar";

// Assets
// const OstCompImg = "../../../assets/icons/big/OstrichComponentsLogo.png";

export default function OstrichShowcaseMenu() {

///////////
// State //
///////////

    const [directory, setDirectory] = useRecoilState(directoryDataState)
    const router = useRouter()

  ////////////////
  // UseEffects //
  ////////////////

    // Sets Directory
    useEffect(() => {
        setDirectory("Portfolio")            
    }, [])

  ///////////////
  // Functions //
  ///////////////

    function determineRoute(tag){
      let dest = ""
      if (tag === "Cards"){
        dest = "ostcards"
      }
      else if (tag === "Dropdowns"){
        dest = "dropdowns"
      }
      else if (tag === "Tab Bars"){
        dest = "tabbars"
      }
      else if (tag === "Forms"){
        dest = "ostrich_forms"
      }
      else if (tag === "All"){
        dest = "showcase"
      }
      router.push(`/showcases/ostrich-components/${dest}`)
    }

  ////////////////
  // Renderings //
  ////////////////

  function renderMAIN(){
    return(
      <div>
        <div style={Styles.Fonts.pageTitle}>Ostrich Component Library</div>
            <p style={Styles.Fonts.basicX}>
            While there are a plethora of React friendly Front End Component Libraries, none quite seemed to 
            work as fluidly as I would like. As such, I was prompted to create my own Front End Component Library.
            My mission was to create single components capable of rendering complicated series of HTML elements, while 
            simulteanously providing sleak default styles and maintaining full customizability. Nearly every part of this 
            website is constructed using the Ostrich Component Library which will be published to npm when completed.
            </p>
            <p style={Styles.Fonts.basicX}>
            Click one of the buttons below to check out specific Components, how they work and how to properly use them.
            </p>
            <OstCard >
              <FormMultipleChoice 
                inForm={false}
                onChange={(op) => {
                  determineRoute(op.value[0])
                }}
                fieldObj={
                  {
                    id: "2",
                    type: "MC",
                    template: "tabs",
                    options: ["Cards", "Dropdowns", "Tab Bars", "Forms", "All"],
                    textStyle: {fontSize: 18},
                  }
                }
              />
            </OstCard>
      </div>
    )
  }


  //////////
  // Main //
  //////////

    return(
      <div style={{width: '80%', marginLeft: '10%'}}>
        {renderMAIN()}
      </div>
    )
}