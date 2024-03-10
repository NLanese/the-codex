import ListPage from "../../components/global/listPage";

export default function ConceptsList({}){

//////////////
// Contants //
//////////////

    return(
        <div style={{display: "grid", justifyContent: 'center'}}>
            <ListPage items={["Variables", "Functions", "Arrays and Lists", "Coding Strategies"]}/>
        </div>
    )
}