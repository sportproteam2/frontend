import axios from "axios";

export const changeSport= (fed = null) => {
    return (
        {
            type: 'SPORT',
            payload: fed
        }
)
}
const setSportCategory = category => {
    return {
        type: 'SET_CATEGORY',
        payload: category
    }
}

export const getSportCategory = () =>{
    return function (dispatch) {
        axios.get('https://sportproteam2.herokuapp.com/api/sportcategory/')
            .then( (response) => dispatch(setSportCategory(response.data)))
    }
}

export const getCurrentFederation = () => {
    return (
        {
            type: 'FEDERATION'
        }
    )
}