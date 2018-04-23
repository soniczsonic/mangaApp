const STATR_FETCH_BEAUTIFUL_PAGE_DATA = "STATR_FETCH_BEAUTIFUL_PAGE_DATA";
const FETCH_BEAUTIFUL_PAGE_DATA = "FETCH_BEAUTIFUL_PAGE_DATA";

const nameInitialState = {
    data: [],
    isLoading: false,
    isSuccess: false,
    err: null
}

const beautifulPageReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case STATR_FETCH_BEAUTIFUL_PAGE_DATA:
            return Object.assign({}, state, {
                isLoading: action.isLoading
            })
        case FETCH_BEAUTIFUL_PAGE_DATA:
            return Object.assign({}, state, {
                isLoading: false,
                isSuccess: action.isSuccess,
                data: action.data,
                err: action.err
            })
        default:
            return state
    }
}
export default beautifulPageReducer;