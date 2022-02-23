import React from 'react';

export default function NewsListItem({ item, onDelete }) {
    const { id, title, desc, category } = item;

    let classNameNews;
    switch (category) {
        case "tourism":
            classNameNews = 'bg-danger bg-gradient';
            break;
        case "world":
            classNameNews = 'bg-secondary bg-gradient';
            break;
        case "sport":
            classNameNews = 'bg-primary bg-gradient';
            break;
        default:
            classNameNews = 'bg-info'
    }

    return (
        <div className={`card mb-3 ${classNameNews} text-white`}>
            <span className='close' onClick={() => onDelete(id)}>&times;</span>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src='https://images.unsplash.com/photo-1644847381517-ec85d23114a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' className="img-fluid rounded-start" alt={title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
