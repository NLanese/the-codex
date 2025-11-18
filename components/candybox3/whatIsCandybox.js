// React + Next
import React, {useEffect, useState, useRef} from "react";
import Styles from "../../styles/styles";
import { OstCard } from "../../OstrichComponents/Format/OstCard";

export default function WhatIsCandyBox() {

    const candy2ScnSht = "../../assets/showcase_images/candybox3/candybox2.png"


    const renderMAIN = () => {
        return(
            <div style={{marginBottom: 10}}>
            <div style={{...Styles.Sections.lessonContent, marginLeft: '5%', width: '80%'}}>
                <div style={Styles.Fonts.lessonHeader}>What is Candybox?</div>
                    <p style={Styles.Fonts.basicX}>
                    As young student, I was lucky enough to grow up at a time where technology was widely available in the classroom.
                    The downside of this was I was a child with the attention span of a child. As such, many who found themselves simmilarly bored
                    as myself took it upon themselves to find flash games on the internet to play as whatever book of the week was being 
                    discussed. One such game that I discovered and was always very impressed and amused with was <a href="https://candybox2.github.io/">Candy Box 2</a>
                    </p>

                    <div style={{display: 'flex', width: '100%'}}>
                        <OstCard 
                            style={{height: 600, flex: 7}}
                            templateStyle={1}
                            imageSrc={candy2ScnSht}
                        >
                            A screenshot from Candybox 2
                        </OstCard>
                        <div style={{flex: 5, padding: 10, paddingLeft: 30}}>
                            <p style={Styles.Fonts.basicX}>
                            As young student, I was lucky enough to grow up at a time where technology was widely available in the classroom.
                            The downside of this was I was a child with the attention span of a child. As such, many who found themselves simmilarly bored
                            as myself took it upon themselves to find flash games on the internet to play as whatever book of the week was being 
                            discussed. One such game that I discovered and was always very impressed and amused with was <a href="https://candybox2.github.io/">Candy Box 2</a>
                            </p>
                            <p style={Styles.Fonts.basicX}>
                            At the time of discovering this game, I could not even code a "Hello World" program, but I knew something as rudimentary as 
                            this small HTML based game must be within grasp. During college I tried a few times to create a Candy Box 2 clone, but always
                            found myself getting sidetracked with life. Now that I am at a point in my professional career where I can properly
                            allocate time for work, personal projects, and my personal life I found myself able to give this task a proper effort.
                            </p>
                        </div>
                    </div>
                    
            </div>
            </div>
        )
    }



    return renderMAIN()
}