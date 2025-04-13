// React
import React, {useEffect, useState} from "react";

// Next JS
import { useRouter } from "next/router";

// Recoil
import { useRecoilState } from "recoil";
import { tokenState, tabBarState, directoryDataState } from "../recoil/atoms";

// Styles 
import Styles from "../styles/styles";

// Ostrich
import { ODef } from "../OstrichComponents/Text/OstrichDefinition";
import { ODefContnet } from "../constants/oDefContent";
import { OstCard } from "../OstrichComponents/Format/OstCard";

// Assets
const OstCompImg = "/assets/icons/big/OstrichComponentsLogo.png";

export default function Landing() {

  ///////////
  // State //
  ///////////

  const [directory, setDirectory] = useRecoilState(directoryDataState)

  const [tabBar, setTabBar] = useRecoilState(tabBarState)

  const router = useRouter()

  ////////////////
  // UseEffects //
  ////////////////

  useEffect(() => {
    setDirectory(false)
  }, [])

  return (
    <div style={{marginTop: 20}}>
     <div style={Styles.Fonts.pageTitle}>Welcome to The Codex</div>
      <div style={{...Styles.Sections.lessonContent, margin: "30px"}}>
        <p style={Styles.Fonts.basic}>
            Created entirely from Custom Made React Components, the Codex was forged and is maintained soley by 
            <ODef 
            text="Nick Lanese" 
            modalContent={
            <ODefContnet 
                color="#88fccc" 
                word="Nick Lanese" 
                definition= "A Full Stack Software Developer and Cloud Architect. Well versed in both web and mobile front end frameworks as well as a variety of backend technologies and familiarized (and AWS Certified) for AWS Cloud Usage, I am an enthusiastic and inquisitive aspiriing developer from New Jersey!"
                />} 
            />. The goal of this site is to not only showcase some of my talents, but to show the world what a developer can learn on their own, as well as to provide a preview of some of the amazing projects that can be in an aspiring developers' near future! 
        </p>
        <p style={Styles.Fonts.basic}>
            I believe that anyone can become a developer, as I myself learned the skills of my trade through onlione courses, YouTube videos, and the occasional educational Reddit post. As such, I hope The Codex will be used as a repository of knowledge for all things Computer Science, and if even one person's life trajectory is changed by my content then it will all be worthwhile. Ranging from lessons on the most basic of Computer Science Principles to detailed examinations of some of the more popular open source frameworks and libraries, this site will have you making sites of your own in no time; it aims to be a resource that I myself yearned for when learning how to develop.
        </p>
        <div style={{
          display: 'flex', 
          flexDirection: 'row',
          alignContent: 'space-evenly',
          width: '100%',
        }}>
                <OstCard
                  templateStyle={1}
                  imageSrc={OstCompImg}
                  style={{flex: 4, margin: 5}}
                  onClick={() => {
                    setTabBar("Ostrich Components")
                    router.replace("/showcases/ostrich-components/showcase")
                  }}
                >
                  Ostrich Component Library
                </OstCard>
                <OstCard
                  templateStyle={1}
                  imageSrc={OstCompImg}
                  style={{flex: 4, margin: 5}}
                  onClick={() => {
                    setTabBar("Ongoing Projects")
                    router.replace("/showcases/projects/menu")
                  }}
                >
                  Current Projects by Nick
                </OstCard>
                <OstCard
                  templateStyle={1}
                  imageSrc={OstCompImg}
                  style={{flex: 4, margin: 5}}
                >
                  Nick's Portfolio
                </OstCard>
        </div>
     </div>
    </div>
  );
}
