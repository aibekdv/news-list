const initialState = {
    filters: [],
    filterLoadingStatus: "no",
    activeFilter: "all",
}

const filter = (state = initialState, action) => {
    switch (action.type) {

        case "FILTER_FETCHING":
            return {
                ...state,
                filterLoadingStatus: 'loading'
            }
        case "FILTER_FETCHED":
            return {
                ...state,
                filters: action.payload,
                filterLoadingStatus: 'no'
            }
        case "ACTIVE_FILTER_CHANGED":
            return {
                ...state,
                activeFilter: action.payload,
            }
        default:
            return state;
    }
}

export default filter;