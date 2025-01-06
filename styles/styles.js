const Styles = {

    Fonts: {

        pageTitle: {
            fontFamily: "Gilroy", 
            fontSize: 48, fontWeight: 700, 
            textAlignVertical: 'center', 
            letterSpacing: 0.95, 
            marginBottom: 0,
            textAlign: 'center', 
            width: '30%,', maxWidth: '75%', 
            backgroundColor: "#fafffe",
            boxShadow:'1px 2px 3px 2px rgba(0, 0, 0, 0.2)',
            paddingRight: '5.5%', paddingLeft: '5.5%', paddingTop: 8.5,
            borderRadius: 30
        },

        h1: {fontFamily: "Gilroy", fontSize: 24, fontWeight: 600},
        h2: {fontFamily: "Gilroy", fontSize: 20, fontWeight: 500, textAlignVertical: 'center', textAlign: 'center'},
        
        definition: {fontFamily: "Gilroy", fontSize: 16, fontWeight: 300, paddingRight: 5, paddingLeft: 5, paddingTop: 3, paddingBottom: 3},
    },

    Code: {
        code: {marginBottom: 0, marginTop: 0},
        keyword: {fontSize: 16, color: '#bd2eff', marginTop: 0, marginBottom: 0},
        var: {fontSize: 16, color: '#0fdefa', marginTop: 0, marginBottom: 0},
        reg: {fontSize: 16, color: 'white', marginTop: 0, marginBottom: 0},
        str: {fontSize: 16, color: "#f7e672", marginTop: 0, marginBottom: 0},
        bool: {fontSize: 16, color: "#3fa0a0", marginTop: 0, marginBottom: 0},
        comment: {fontSize: 16, color: "#41FF00", marginTop: 0, marginBottom: 0},
    },

    Sections: {
        sideMenu: {position: 'sticky', top: 10},
        subContentBubble: {
            marginTop: 45,
            padding: 15,
            justifyContent: 'center', 
            borderRadius: 12,
            backgroundColor: "#ebf4ff",
            boxShadow:'2px 2px 2px 2px rgba(40, 40, 40, 0.1)'
        }
    }

}

export default Styles