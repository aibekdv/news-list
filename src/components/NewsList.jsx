import React, { useEffect, useCallback } from 'react'
import { useHttp } from "../hook/useHttp";
import { useSelector, useDispatch } from "react-redux";
import { newsFetch, newsDelete } from "../redux/actions";
import Spinner from "./Spinner";
import NotFound from "./NotFound/NotFound";
import NewsListItem from './NewsListItem';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { createSelector } from 'reselect';

const NewsList = () => {
    const { request } = useHttp();
    const dispatch = useDispatch();

    const filteredNewsSelected = createSelector(
        (state) => {
            return state.filter.activeFilter
        },
        (state) => state.news.news,
        (filter, news) => {
            if (filter === "all") {
                return news
            } else {
                return news.filter(i => i.category === filter)
            }
        }
    );

    const filteredNews = useSelector(filteredNewsSelected);
    const filterLoadingStatus = useSelector(state => state.filterLoadingStatus);

    useEffect(() => {
        dispatch(newsFetch(request))

        // eslint-disable-next-line
    }, [])

    const onDelete = useCallback(id => {
        dispatch(newsDelete(request, id, toast))
        // eslint-disable-next-line
    }, [])


    if (filterLoadingStatus === 'loading') {
        return <Spinner />
    } else if (filterLoadingStatus === 'error') {
        return <NotFound />
    }

    const renderNewsList = (arr) => {
        if (arr.length === 0) {
            return <h2 className='text-white'>News doesn`t exist.</h2>
        }
        return arr.map(item => (
            <div key={item.id}>
                <NewsListItem item={item} onDelete={onDelete} />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        ))
    }
    const element = renderNewsList(filteredNews);
    return (
        <div className='m-2'>
            {element}
        </div>
    )
}

export default NewsList
