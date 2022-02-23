import { createAction } from "@reduxjs/toolkit";

export const newsFetch = (request) => (dispatch) => {
    dispatch(newsFetching());
    request("http://localhost:3001/news")
        .then(data => dispatch(newsFetched(data)))
        .catch(() => dispatch(newsFetchingError()));
}

export const newsDelete = (request, id, toast) => (dispatch) => {
    request(`http://localhost:3001/news/${id}`, "DELETE")
        .then(dispatch(newsDeleted(id)))
        .then(toast.error("News deleted!"))
        .catch(err => console.log(err))
}

export const filterFetch = (request) => (dispatch) => {
    dispatch(filtersFetching());
    request('http://localhost:3001/filters')
        .then(data => dispatch(filtersFetched(JSON.parse(JSON.stringify(data)))))
        .catch(err => console.log(err))
}

export const newsFetching = createAction("NEWS_FETCHING");
export const newsFetched = createAction("NEWS_FETCHED");
export const newsFetchingError = createAction("NEWS_FETCHING_ERROR");
export const addNews = createAction("ADD_NEWS_ITEM");
export const filtersFetching = createAction("FILTER_FETCHING");
export const filtersFetched = createAction("FILTER_FETCHED");
export const activeFilterChanged = createAction("ACTIVE_FILTER_CHANGED");
export const newsDeleted = createAction("NEWS_DELTED");
