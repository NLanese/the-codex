import TabBarsShowcase from "../../../components/ostrich-components/tabBars";
import { useRecoilState } from "recoil";
import { tabBarState, directoryDataState } from "../../../recoil/atoms";
import { useEffect } from "react";

export default function OstCardsPage(){

    const [directory, setDirectory] = useRecoilState(directoryDataState)
    
    useEffect(() => {
        setDirectory("Portfolio")
    }, [])
    
    return(
        <div style={{paddingRight: '8%', paddingLeft: '8%', paddingTop: '2.5%'}}>
            <TabBarsShowcase />
        </div>
    )

} 