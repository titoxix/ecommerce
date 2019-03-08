import * as ApiService from "../../services/api";

export const updateSearchInformation = (query) => (dispatch, getState) => {
    return ApiService.Search(query)
        .then(payload => {
            dispatch({
                type: 'UPDATE_SEARCH_INFORMATION',
                payload: {
                    data: payload.data,
                }
            })
            return payload.status
        });
};

export const updateItemDetail = (id) => (dispatch, getState) => {
    return ApiService.itemDetail(id)
        .then(payload => {
            dispatch({
                type: 'UPDATE_ITEM_DETAIL',
                payload: {
                    data: payload.body.data,
                }
            })
            return payload
        });
};