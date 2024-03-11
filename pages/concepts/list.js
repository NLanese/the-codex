import ListPage from "../../components/global/listPage";
import { conceptsList } from "../../constants/lessonLists";

export default function ConceptsList({}){

//////////////
// Contants //
//////////////

    return(
        <div style={{display: "grid", justifyContent: 'center'}}>
            <ListPage items={conceptsList} directory={"concepts"}/>
        </div>
    )
}