import Colors from "../../styles/colors"
import { useRouter } from "next/router"

export default function ListPage({items, directory}){

    ///////////
    // State //
    ///////////

        const [hoveredItm, setHoveredItm] = useState(false)

        const router = useRouter()

    ///////////////
    // Functions //
    ///////////////

        function handleMouseEnter(itm){
            setHoveredItm(itm)
        }

        function handleMouseLeave(){
            setHoveredItm(false)
        }

        function determineColor(itm){
            if (hoveredItm === itm){
                return Colors.activeColor
            }
        }

    return items.map( itm => {
        return(
            <div
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
            style={{backgroundColor: determineColor(itm), width: 240, height: 130, justifyContent: 'center', alignItems: 'center', borderRadius: 15}}
            onClick={(itm) => {router.replace(`/${directory}/${itm}`)}}
            >
                {itm}
            </div>
        )
    })
}