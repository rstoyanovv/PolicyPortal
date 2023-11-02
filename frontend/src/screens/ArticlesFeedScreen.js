import { useState } from "react";
import SingleArticleInFeedScreen from "./SingleArticleInFeedScreen";
import { useEffect } from "react";
import axios from "axios";

import '../styles/articleFeedStyle.css';

export default function ArticlesFeedScreen() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const result = await axios.get(`/api/articles`);
                const articlesData = Object.values(result.data.result);
                setArticles(articlesData);
            } catch (err) {
                console.error(err);
            }
        };
        fetchArticles();
    }, []);

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