const initialState = {
    searchInformation: {},
    itemDetail: {},
}

const search = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case 'UPDATE_SEARCH_INFORMATION':
            newState = {
                ...state,
                searchInformation: { ...state.searchInformation, ...action.payload.data }
            };
            return newState;
        case 'UPDATE_ITEM_DETAIL':
            newState = {
                ...state,
                itemDetail: { ...state.itemDetail, ...action.payload.data }
            };
            return newState;
        default:
            return state
    }
}

export default search;