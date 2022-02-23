import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHttp } from "../hook/useHttp";
import { v4 } from "uuid";
import { addNews } from "../redux/actions";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function NewsAddForm() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");

    const dispatch = useDispatch();
    const { request } = useHttp();

    const addNewsItem = (e) => {
        e.preventDefault()
        const newNews = { id: v4(), title, desc, category };
        request('http://localhost:3001/news', "POST", JSON.stringify(newNews))
            .then(data => dispatch(addNews(data)))
        setTitle("");
        setDesc("");
        setCategory("");
        toast.success("Success news added.")
    }

    return (
        <>
            <form className="form-add" onSubmit={addNewsItem}>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name='title' id="floatingInput"
                        placeholder="name@example.com"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <label htmlFor="floatingInput">Title</label>
                </div>

                <div className="form-floating mb-3">
                    <textarea
                        className="form-control"
                        name='desc'
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        style={{ height: "100px" }}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        required
                    ></textarea>
                    <label htmlFor="floatingTextarea2">Description</label>
                </div>

                <div className="mb-3">
                    <label htmlFor="category">Choose a type news...</label>
                    <select
                        className="form-select"
                        id="category"
                        name='category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="sport" defaultChecked>Sport News</option>
                        <option value="world">World News</option>
                        <option value="tourism">Toursim News</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-dark w-100">Submit</button>
            </form>
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
        </>
    )
}

export default NewsAddForm
