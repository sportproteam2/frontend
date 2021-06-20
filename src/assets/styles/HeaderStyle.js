const headerStyle = {
    header_light: {
        background: 'white'
    },
    appBar: {
        backgroundColor: 'transparent !important',
        borderBottom: 'solid 1px'
    },
    appBar2: {
        backgroundColor: 'white !important',
        borderBottom: 'solid 1px',
        color: 'black !important'
    },
    appBar_container: {
        display: 'flex'
    },
    appBar_logo_wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    appBar_logo: {
        margin: '9px 9px 9px 0px',
        width: '90px'
    },
    appBar_menu: {
        maxHeight: 'inherit !important',
        borderLeft: 'solid 1px'
    },
    appBar_icon_wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    list: {
        display: 'flex',
        justifyContent: 'space-evenly',
        fontSize: '14px',
        marginTop: '1px',
        listStyle: 'none',
        color: 'inherit'
    },
    listItem: {
        display: 'block',
        width: 'auto',
        margin: '0'
    },
    listItem_anchor: {
        paddingTop: '20px',
        paddingBottom: '19px',
        textDecoration: 'none !important',
        color: 'white !important'
    },
    listItem_anchor2: {
        paddingTop: '20px',
        paddingBottom: '19px',
        textDecoration: 'none !important',
        color: 'black !important'
    },
    listItem_active: {
        color: '#ED2840 !important',
        borderBottom: 'solid 4px #ED2840',
        textDecoration: 'none !important',
    },
    listItemText: {
        color: 'white',
        padding: '0',
    },
    navLink: {
        color: 'inherit',
        position: 'relative',
        padding: '0.9375rem',
        fontWeight: '400',
        fontSize: '12px',
        textTransform: 'uppercase',
        borderRadius: '3px',
        lineHeight: '20px',
        textDecoration: 'none',
        margin: '0px',
        display: 'inline-flex',
        '&:hover,&:focus': {
            color: 'inherit',
            background: 'rgba(200, 200, 200, 0.2)'
        }
    },
    notificationNavLink: {
        color: 'inherit',
        padding: '0.9375rem',
        fontWeight: '400',
        fontSize: '12px',
        textTransform: 'uppercase',
        lineHeight: '20px',
        textDecoration: 'none',
        margin: '0px',
        display: 'inline-flex',
        top: '4px',
    },
    registerNavLink: {
        top: '3px',
        position: 'relative',
        fontWeight: '400',
        fontSize: '12px',
        textTransform: 'uppercase',
        lineHeight: '20px',
        textDecoration: 'none',
        margin: '0px',
        display: 'inline-flex',
    },
    navLinkActive: {
        color: 'inherit',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    icons: {
        width: '20px',
        height: '20px',
        marginRight: '3px',
    },
    socialIcons: {
        position: 'relative',
        fontSize: '20px !important',
        marginRight: '4px',
    },
    dropdownLink: {
        '&,&:hover,&:focus': {
            color: 'inherit',
            textDecoration: 'none',
            display: 'block',
            padding: '10px 20px',
        },
    },
    marginRight5: {
        marginRight: '5px',
    }
}
export default headerStyle;
