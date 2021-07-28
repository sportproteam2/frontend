import axios from "axios";

const initialState = async () => {
    const res = await axios.get('https://sportproteam2.herokuapp.com/api/sportcategory/');
    console.log('RESDATAAA', res.data);
    return res.data;
}
const sportCategoryReducer= (state=initialState, action) =>{
    switch (action.type){
        case "SPORTCATEGORY":
            return state;
        default: return state;
    }
}
export default sportCategoryReducer;