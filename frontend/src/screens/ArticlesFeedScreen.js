import { useState } from "react";
//import SingleArticleInFeedScreen from "./SingleArticleInFeedScreen";
import { useEffect } from "react";
import axios from "axios";

export default function ArticlesFeedScreen() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = () => {
            try {
                const result = axios.get(`/api/articles`);
                const articlesData = result.data;
                setArticles(articlesData);
            } catch (err) {
                console.error(err);
            }
        };
        fetchArticles();
    }, []);

    console.log("Articles: ");
    console.log(articles);

    return (
        <div>
            <h1>All of the articles</h1>
            <ul >
                {articles.map((article) => (
                    <li key={article.id}/>
                ))}
            </ul>
        </div>
    );
}