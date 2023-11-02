import { useState } from "react";
import SingleArticleInFeedScreen from "./SingleArticleInFeedScreen";
import { useEffect } from "react";
import axios from "axios";

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
            <h1>All of the articles</h1>
            <div>
                { articles.map ((article, index) => (
                    < SingleArticleInFeedScreen 
                        key = {index}
                        article = {article}
                    />
                ))};
            </div>
        </div>
    );
}