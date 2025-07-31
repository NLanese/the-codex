import ListPage from "../../../components/global/codexList";

export default function FrameworksList({}){

//////////////
// Contants //
//////////////

    return(
        <div style={{display: "grid", justifyContent: 'center'}}>
            <ListPage items={["React JS", "React Native", "Angular", "Ionic", "Pandas", "NumPy"]}/>
        </div>
    )
}