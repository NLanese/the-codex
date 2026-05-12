import React, {useEffect, useState, useRef} from "react";
import Styles from "../../styles/styles";

export default function SavedBuilds({
    isMobile
}){

    return(
        <div style={{padding: 20}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <p style={{...Styles.Fonts.basic, marginTop: 0, marginBottom: 0, color: silverLining}}>Enter a Name for your Build: </p>
                <input style={{width: '62%'}} onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </div>
    )
}