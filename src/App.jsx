import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import NewsAddForm from "./components/NewsAddForm";
import NewsFilter from "./components/NewsFilter";

function App() {
    return (
        <div className="app">
            <Navbar />
            <div className="content container">
                <NewsList />
                <div className="content__page m-2">
                    <NewsAddForm />
                    <NewsFilter />
                </div>
            </div>
        </div>
    )
}

export default App;