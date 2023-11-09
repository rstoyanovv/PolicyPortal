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
            <div class="grid grid-cols-2 header-container">
                <div class="header-title">
                    <h1> { article.title } </h1>
                </div>
                <div class="header-created-date">
                    <h4> Uploaded at { editedDate } </h4>
                </div>
            </div>
            <div className="article-container">
                <p className="article"> { article.article } </p>
                <p className="username-text"> The author is <span id="username"> { article.username } </span> </p>
            </div>    
        </div>
    );
}