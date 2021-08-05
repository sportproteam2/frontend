
const reducer = (state = null, action) => {
    if (action.payload != null){
        state = action.payload;
    }
    switch (action.type) {
        case "CHANGE_SPORT":
            return state;
        default:
            return state;
    }

};

export default reducer;
