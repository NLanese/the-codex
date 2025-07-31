import CodexList from "../../components/global/codexList";
import { conceptsList } from "../../constants/lessonLists";

export default function ConceptsList({}){

//////////////
// Contants //
//////////////

    return(
        <div style={{display: "grid", justifyContent: 'center'}}>
            <CodexList items={conceptsList} directory={"concepts"}/>
        </div>
    )
}