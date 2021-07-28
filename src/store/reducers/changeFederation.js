const reducer = (state = null, action) => {
    switch (action.type) {
        case "CHANGE_FEDERATION":
            return action.payload;
        default:
            return state;
    }

};

export default reducer;
