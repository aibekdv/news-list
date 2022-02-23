import React, { useEffect } from 'react'
import { useHttp } from "../hook/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { filterFetch, activeFilterChanged } from "../redux/actions"
import classNames from 'classnames';

function NewsFilter() {

    const { request } = useHttp();
    const dispatch = useDispatch();
    const { filters, activeFilter } = useSelector(state => state.filter);

    useEffect(() => {
        dispatch(filterFetch(request))
        // eslint-disable-next-line
    }, [])

    const renderList = (arr = []) => {
        if (arr.length === 0) {
            return <h4 className='text-center mx-3'>Filters dosen`t found</h4>
        }
        return arr.map(({ label, name, className }) => {
            const btnClasses = classNames("btn", className, {
                "active": name === activeFilter
            })

            return (
                <button
                    key={name}
                    id={name}
                    className={btnClasses}
                    onClick={() => dispatch(activeFilterChanged(name))}
                > {label} </button>
            )
        })
    }

    return (
        <div className='d-flex filter'>
            {renderList(filters)}
        </div>
    )
}

export default NewsFilter
