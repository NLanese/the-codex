import Styles from "../../styles/styles";

export default function renderTitle(title){
    return(
        <div style={{width: '100%', justifyItems: 'center',}}>
            <p style={{...Styles.Fonts.pageTitle}}>
                {title}
            </p>
        </div>
    )
}