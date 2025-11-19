import DropdownShowcase from "../../../components/ostrich-components/dropdowns";

// Recoil
import { useAtom } from "jotai";
import { tabBarState, directoryDataState } from "../../../jotai/atoms";
import { useEffect } from "react";


export default function DropdownPage(){

    const [directory, setDirectory] = useAtom(directoryDataState)
    
    useEffect(() => {
        setDirectory("Portfolio")
    }, [])

    return(
        <div style={{paddingRight: '8%', paddingLeft: '8%', paddingTop: '2.5%'}}>
            <DropdownShowcase /> 
        </div>
    )
}