const mainPageReducer= (state=true, action) =>{
    switch (action.type){
        case "MAIN":
            return !state;
        default:
            return state;
    }
}
export default mainPageReducer;