// React
import React, {useEffect, useState} from "react";

// Recoil
import { useRecoilState } from "recoil";
import { tokenState, tabBarState, directoryDataState } from "../recoil/atoms";

// Styles 
import Styles from "../styles/styles";

export default function Landing() {

  ///////////
  // State //
  ///////////

  const [directory, setDirectory] = useRecoilState(directoryDataState)

  ////////////////
  // UseEffects //
  ////////////////

  useEffect(() => {
    setDirectory(false)
  }, [])

  return (
    <>
     <div style={Styles.Fonts.h1}>Welcome to The Codex</div>
    </>
  );
}
