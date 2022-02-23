import { createReducer } from "@reduxjs/toolkit";
import { newsFetching, newsFetched, newsFetchingError, addNews, newsDeleted } from "../actions";

const initialState = {
    news: [],
    newsLoadingStatus: 'no'
}


const news = createReducer(initialState, builder => {
    builder
        .addCase(newsFetching, (state) => { state.newsLoadingStatus = 'loading' })
        .addCase(newsFetched, (state, action) => {
            state.newsLoadingStatus = 'no';
            state.news = action.payload;
        })
        .addCase(newsFetchingError, state => { state.newsLoadingStatus = 'error' })
        .addCase(addNews, (state, action) => { state.news.push(action.payload) })
        .addCase(newsDeleted, (state, action) => {
            state.news = state.news.filter(i => i.id !== action.payload)
        })
})

export default news;