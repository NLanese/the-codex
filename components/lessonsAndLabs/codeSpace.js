import React, { useEffect, useState, useRef } from 'react';

import { OstrichTabBar } from '../../OstrichComponents/Tabs/OstrichTabBar';


const CodeSpace = ({
    javascript,
    ruby,
    cpp,


}) => {

    ///////////
    // State //
    ///////////

        const [language, setLanguage] = useState("javascript")

    /////////////////
    // Main Return //
    /////////////////
    return(
        <div>
            <OstrichTabBar 
                startingTabByTitle={language}
                tabs={["JavaScript", "Ruby", "C++"]}

                activeTitleStyle={{textAlign: 'center', fontSize: 24, fontWeight: 500, color: '#15c97b', marginTop: 10, fontFamily: "Gilroy", fontWeight: 700}}

                tabStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 5, marginBottom: 5, borderLeft: "1px solid white", borderRight: "1px solid white" }}
                activeTabStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 5, marginBottom: 5, borderLeft: "1px solid green", borderRight: "1px solid green" }}
                hoverTabStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 3, marginBottom: 3, borderLeft: "1px solid white", borderRight: "1px solid white",  borderTop: "1px solid white", borderBottom: "1px solid white" }}
        
                drawerColor="white"
                drawerHoverColor=" #E9F1FF"
            />
            <div>

            </div>
        </div>
    )
}