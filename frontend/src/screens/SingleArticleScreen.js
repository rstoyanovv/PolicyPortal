import { useParams } from "react-router-dom";
import { useArticles } from "../context/articleContext";
import '../styles/singleArticle.css';
import editDateFormat from "../functions/editDate";

export default function SingleArticleScreen() {
    const articles = useArticles();
    const { id } = useParams();

    const article = articles.find((article) => article.id == id);
    const editedDate = editDateFormat(article.created_at);

    return (
        <div className="bg-gray-200 article-screen">
            <div class="grid grid-cols-8 header-container">
                <div class="col-span-4 header-title">
                    <h1> {article.title} </h1>
                </div>
                <div className="col-span-2 username-space">
                    <p className="username-text" style={{paddingTop: '1.2rem'}}> by <span id="username"> {article.username} </span> </p>
                </div>
                <div class="col-span-2 header-created-date">
                    <h4> Uploaded at {editedDate} </h4>
                </div>
            </div>
            <div className="article-container">
                <p className="article"> {article.article} </p>

            </div>
        </div>
    );
}