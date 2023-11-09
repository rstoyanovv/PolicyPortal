import { useParams } from "react-router-dom";
import { useArticles } from "../context/articleContext";

export default function SingleArticleScreen() {
    const articles = useArticles();
    const { id } = useParams();

    console.log(articles);

    const article = articles.find((article) => article.id == id);

    return (
        <div className="article-screen">
            <div class="grid grid-cols-2">
                <div class="bg-gray-200 p-4">
                    <h1>{ article.title }</h1>
                </div>
                <div class="bg-gray-300 p-4">
                    <h4>{ article.created_at }</h4>
                </div>
            </div>
            <p>{ article.article }</p>
            <p>{ article.username }</p>
        </div>
    );
}