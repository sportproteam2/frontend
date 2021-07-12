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
        paddingTop: '3%',
        paddingLeft: '10%',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '31px',
        textAlign: 'left'
    },
    about_desc_title: {
        paddingTop: '70px',
        paddingBottom: '30px',
        fontSize: '42px',
        fontWeight: '700',
        lineHeight: '62px',
        color: '#ED2840'
    },
    news_wrapper_title: {
        fontSize: '42px',
        fontWeight: '700',
        lineHeight: '62px',
        color: '#ED2840'
    },
    news_block_wrapper: {
        paddingBottom: '50px',
    },
    rating_label: {
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '24px',
        textAlign: 'left'
    },
    submit_button: {
        marginTop: '30px',
        marginBottom: '30px',
        marginLeft: '15px',
        paddingLeft: '5%',
        paddingRight: '5%',
        borderRadius: '0'
    },
    news_main_card_wrapper: {
        height: "350px",
        width: "auto",
        color: "white !important"
    },
    news_main_card_text: {
        fontSize: '24px',
        fontWeight: '600',
        lineHeight: '35px'
    },
    hr: {
        marginLeft: '7%',
        marginTop: '0',
        height: '3px',
        width: '40px',
        color: 'white !important'
    },
    news_main_card_text_wrapper: {
        position: 'absolute',
        bottom: '5%',
        left: '10%'
    },
    ratings: {
        paddingLeft: '10%',
        paddingRight: '10%',
    },
    rating_table_wrapper: {
        marginTop: '5%',
        marginLeft: '1%'
    },
    table_header: {
        borderTopStyle: 'hidden !important',
        borderLeftStyle: 'hidden !important',
        borderRightStyle: 'hidden !important',
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '35px',
        color: '#ED2840'
    },
    news_wrapper: {
        paddingTop: '70px',
        paddingBottom: '50px',
      display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    event_card_wrapper: {
        marginLeft: '20px',
        border: 'solid #ED2840',
    },
    event_card_text_wrapper: {
        marginTop: '10px',
        marginBottom: '10px'
    },
    event_card_title: {
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '29px',
        textAlign: 'left',
        textTransform: 'uppercase'
    },
    event_card_status: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '16px',
        textAlign: 'left',
        fontFamily: 'Lato !important, sans-serif'
    },
    gallery_wrapper: {
        paddingLeft: '10%',
        paddingRight: '10%',
        background: '#020712',
    },
    gallery_top: {
        marginTop: '3%',
        marginBottom: '2%',
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    news_item: {
        marginBottom: '15px',
        marginTop: '15px',
        display: 'flex',
        border: '1px solid #E8E8E8',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)'
    },
    news_item_img: {
        height: '130px',
        maxWidth: '50%',
    },
    news_item_text_wrapper: {
        backgroundColor: '#FFFFFF',
        paddingLeft: '15px',
        paddingTop: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'space-between'
    },
    news_item_text_tag: {
        paddingLeft: '10px',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '12px',
        textAlign: 'left',
        color: '#ED2840'
    },
    news_item_text_date: {
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '12px',
        textAlign: 'left',
        color: '#898989'
    },
    news_item_text_title: {
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '20px',
        textAlign: 'left'
    },
    news_item_text_additional: {
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '12px',
        textAlign: 'left',
        marginTop: '0',
        textTransform: 'uppercase'
    },
    news_hr: {
        width: '30px',
        height: '1px',
        marginTop: '5px',
        marginLeft: '0',
        background: 'black'
    },
}
export default aboutUsStyle;