
const sportCategoryReducer=  (state = {}, action) => {
    // if (action.payload != null){
    //     state = action.payload.results;
    // }
    switch (action.type) {
        case "SET_CATEGORY":
            return state;
        default:
            return state;
    }
}
export default sportCategoryReducer;