import { configureStore } from '@reduxjs/toolkit';
import news from './reducers/news';
import filter from './reducers/filter';
import stringMiddleWare from '../middleware/stringMiddleware';


const store = configureStore({
    reducer: { news, filter },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stringMiddleWare),
    devTools: process.env.NODE_ENV !== "production"
})

export default store;