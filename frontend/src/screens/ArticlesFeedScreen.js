import SingleArticleInFeedScreen from "./SingleArticleInFeedScreen";
import { useArticles } from "../context/articleContext";

import '../styles/articleFeedStyle.css';

export default function ArticlesFeedScreen() {
    const articles = useArticles();

    console.log(articles);

    return (
        <div>
            <h1 className="self-center text-8x3 whitespace-nowrap font-bold heading-feed"> Last articles </h1>
            <div className = "mb-24 articles-feed-container">
                { articles.map((article, index) => (
                    < SingleArticleInFeedScreen 
                        key = {index}
                        article = {article}
                        index = {index}
                    />
                ))}
            </div>
        </div>
    );
}