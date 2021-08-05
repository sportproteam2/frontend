const RatingStyle = {
    upper_container_wrapper: {
        height: '225px',
        width: '100%',
        backgroundColor: '#020712',
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingLeft: '10%'
    },
    upper_container_img: {
      height: '100px',
      width: '100px',
        borderRadius: '50%'
    },
    upper_text_wrapper: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '30px'
    },
    bolder_title: {
        color: '#ED2840',
        fontSize: '28px',
        fontWeight: '700',
        lineHeight: '41px',
        paddingTop: '10%',
        textTransform: 'uppercase'
    },
    simple_text: {
        color: 'white',
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '21px'
    },
    container_wrapper: {
        paddingTop: '4%'
    },
    tournament_container_wrapper: {
        display: 'flex',
        paddingLeft: '10%',
        paddingRight: '10%',
        flexDirection: 'column'
    },
    table_wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'right',
        paddingTop: '10%',
        paddingLeft: '10%',
        paddingRight: '10%'
    },
    to_right: {
        marginLeft: 'auto',
        marginRight: '0'
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
    form: {
        display: 'flex',
        alignSelf: 'right'
    },

    submit_button: {
        paddingLeft: '5%',
        paddingRight: '5%',
        borderRadius: '0'
    },
    card_wrapper: {
        border: 'solid #ED2840',
    },
    card_text_wrapper: {
        marginTop: '10px',
        marginBottom: '10px',
        paddingLeft: '15px',
        paddingRight: '15px',
    },
    card_title: {
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '29px',
        textAlign: 'left',
        textTransform: 'uppercase'
    },
    card_status: {
        fontSize: '26px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '38px',
        textAlign: 'left'
    }

}
export default RatingStyle;