import aboutUs from "../img/aboutUs.png"

const aboutUsStyle = {
    about_photo_section: {
        backgroundImage: 'url(' + aboutUs + ')',
        height: '822px',
        marginTop: '0',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center'
    },
    about_title_wrapper: {
        backgroundColor: 'white',
        height: '80px',
        width: '80%',
        marginTop: '6%'
    },
    about_title: {
        paddingTop: '10px',
        paddingLeft: '20px',
        fontSize: '42px',
        fontWeight: '900',
        lineHeight: '51px',
        color: '#ED2840'
    },
    about_desc: {
        paddingTop: '5%',
        paddingLeft: '10%',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '31px',
        textAlign: 'left'
    },
    about_desc_title: {
        paddingTop: '40px',
        paddingBottom: '30px',
        fontSize: '42px',
        fontWeight: '700',
        lineHeight: '62px',
        color: '#ED2840'
    }
}
export default aboutUsStyle;