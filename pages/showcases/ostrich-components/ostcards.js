import OstCardShowcase from "../../../components/ostrich-components/ostCards";
import { useAtom } from "jotai";
import { tabBarState, directoryDataState } from "../../../jotai/atoms";
import { useEffect } from "react";

export default function OstCardsPage(){

    const [directory, setDirectory] = useAtom(directoryDataState)
    
    useEffect(() => {
        setDirectory("Portfolio")
    }, [])

    return(
        <div style={{paddingRight: '8%', paddingLeft: '8%', paddingTop: '2.5%'}}>
            <OstCardShowcase /> 
        </div>
    )
}