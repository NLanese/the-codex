import Styles from "../../styles/styles";

export default function renderTitle(title){
    return(
        <div>
            <p style={{...Styles.Fonts.pageTitle}}>
                {title}
            </p>
        </div>
    )
}