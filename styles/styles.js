const propCard = {
    flex: 3, 
    padding: 5, 
    position: 'relative', 
    overflow: 'scroll', 
    paddingLeft: 3, 
    paddingRight: 3
}

const Styles = {

    Fonts: {

        basic: {
            fontFamily: "Gilroy", 
            fontSize: 16.5, fontWeight: 400, 
        },

        basicX: {
            fontFamily: "Gilroy", 
            fontSize: 20, fontWeight: 400, 
        },

        basicXL: {
            fontFamily: "Gilroy", 
            fontSize: 24, fontWeight: 500, 
        },

        pageTitle: {
            fontFamily: "Gilroy", 
            fontSize: 48, fontWeight: 700, 
            textAlignVertical: 'center', textAlign: 'center', 
            letterSpacing: 0.95, 
            backgroundColor: "#fafffe",
            boxShadow:'1px 2px 3px 2px rgba(0, 0, 0, 0.2)',
            paddingRight: '3.5%', paddingLeft: '3.5%', paddingTop: 5.5,
            borderRadius: 20
        },

        lessonHeader: {
            fontFamily: "Gilroy", 
            fontSize: 32, fontWeight: 600, 
            letterSpacing: 0.95, 
            boxShadow:'2px 2px 0.5px 1px rgba(0, 0, 0, 0.2)',
            paddingRight: '2.5%', paddingLeft: '2.5%', paddingTop: 3.5,
            marginTop: 20,
            color: 'black'
        },

        lessonHeaderShaded: {
            fontFamily: "Gilroy", 
            fontSize: 32, fontWeight: 600, 
            letterSpacing: 0.95, 
            boxShadow:'2px 2px 0.5px 1px rgba(0, 0, 0, 0.2)',
            paddingRight: '2.5%', paddingLeft: '2.5%', paddingTop: 3.5,
            marginTop: 20,
            color: 'black',
            backgroundColor: '#9cc6f0'
        },


        lessonHeaderXL: {
            fontFamily: "Gilroy", 
            fontSize: 44, fontWeight: 600, 
            letterSpacing: 0.95, 
            boxShadow:'2px 2px 0.5px 1px rgba(0, 0, 0, 0.2)',
            paddingRight: '2.5%', paddingLeft: '2.5%', paddingTop: 3.5,
            marginTop: 20,
            color: 'black'
        },

        lessonHeaderShadedXL: {
            fontFamily: "Gilroy", 
            fontSize: 44, fontWeight: 600, 
            letterSpacing: 0.95, 
            boxShadow:'2px 2px 0.5px 1px rgba(0, 0, 0, 0.2)',
            paddingRight: '2.5%', paddingLeft: '2.5%', paddingTop: 3.5,
            marginTop: 20,
            color: 'black',
            backgroundColor: '#9cc6f0'
        },

        lessonSubHeader: {
            fontFamily: "Gilroy", 
            fontSize: 24, fontWeight: 500, 
            letterSpacing: 0.95, 
            boxShadow:'0px 0px 2px 1px rgba(0, 0, 0, 0.2)',
            paddingRight: '2.5%', paddingLeft: '2.5%', paddingTop: 3.5,
            marginTop: 20,
            color: '##5f656e'
        },


        h1: {fontFamily: "Gilroy", fontSize: 24, fontWeight: 600},
        h2: {fontFamily: "Gilroy", fontSize: 20, fontWeight: 500, textAlignVertical: 'center', textAlign: 'center'},
        h3: {fontFamily: "Gilroy", fontSize: 22, fontWeight: 600},

        
        definition: {fontFamily: "Gilroy", fontSize: 16, fontWeight: 300, paddingRight: 5, paddingLeft: 5, paddingTop: 3, paddingBottom: 3},
    },

    Code: {
        code: {marginBottom: 0, marginTop: 0, fontSize: 18},
        keyword: {color: '#bd2eff', marginTop: 0, marginBottom: 0},
        var: {color: '#0fdefa', marginTop: 0, marginBottom: 0},
        reg: {color: 'white', marginTop: 0, marginBottom: 0},
        str: {color: "#f7e672", marginTop: 0, marginBottom: 0},
        bool: {color: "#3fa0a0", marginTop: 0, marginBottom: 0},
        comment: {color: "#41FF00", marginTop: 0, marginBottom: 0},
        func: {color: "#fa6c61", marginTop: 0, marginBottom: 0},

        testCodeSegment: {
            backgroundColor: "black", 
            marginRight: '20%', padding: 10,
            borderRadius: 15, border: "2px solid rgb(156, 161, 158)",
            boxShadow:'2px 2px 2px 2px rgba(40, 40, 40, 0.1)',
            width: 200, maxWidth: '80%'
        },

        codeSnippetTab: {
            fontFamily: "Gilroy", 
            fontWeight: 500,  fontSize: 20, 
            letterSpacing: 0.95, textAlign: 'center',
            textAlignVertical: 'center'
        },

        codeSnippetTabACTIVE: {
            fontFamily: "Gilroy", 
            fontWeight: 600,  fontSize: 22, 
            letterSpacing: 1.05, textAlign: 'center',
            textAlignVertical: 'center'
        },

        codeSnippetTabHOVER: {
            fontFamily: "Gilroy", 
            fontWeight: 600,  fontSize: 22, 
            letterSpacing: 1.20, textAlign: 'center',
            textAlignVertical: 'center'
        }
    },

    Sections: {
        sideMenu: {position: 'sticky', top: 10},
        subContentBubble: {
            marginTop: 45,
            padding: 5,
            justifyContent: 'center', 
            borderRadius: 12,
            backgroundColor: "#ebf4ff",
            boxShadow:'2px 2px 2px 2px rgba(40, 40, 40, 0.1)'
        },

        lessonContent: {
            paddingRight:'3.5%',
            paddingLeft: '3.5%',
        },

        simpleLessonCode: {
            backgroundColor: "black", 
            margin: 15, padding: 10,
            borderRadius: 15, border: "2px solid rgb(156, 161, 158)",
            boxShadow:'2px 2px 2px 2px rgba(40, 40, 40, 0.1)',
            width: 200, maxWidth: '80%'
        },

        importantNote: {
            backgroundColor: "#ebf4ff",
            padding: 15, borderRadius: 25,
            boxShadow:'1px 1px 2px 1px rgba(40, 40, 40, 0.1)',
            marginBottom: 15
        },

        propCardStr: {
          ...propCard, backgroundColor: "#eef2e4"  
        },

        propCardObj: {
            ...propCard, backgroundColor: "#cdfadd"  
        },

        propCardBool: {
            ...propCard, backgroundColor: "#cdcdfa"  
        },

        propCardFunc: {
            ...propCard, backgroundColor: "#fad7cd"  
        },

        propCardArr: {
            ...propCard, backgroundColor: "#efc321"  
        },
    }

}

export default Styles