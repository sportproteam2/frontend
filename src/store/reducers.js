const initialState = {
    federation: null
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "CHANGE_FEDERATION":
            newState.federation += action.value;
            break;
    }
    return newState;
};

export default reducer;
