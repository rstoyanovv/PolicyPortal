import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleArticleScreen() {
    const { id } = useParams();
    const [oneArticle, setOneArticle] = useState(null);

    useEffect(() => {
        const fetchArticleById = async () => {
            try {
                const result = await axios.get(`/api/articles/${id}`);
                const article = Object.values(result.data.result)
                setOneArticle(article);
            } catch (err) {
                console.error(err);
            }
        };
        fetchArticleById();
    }, [id]);

    console.log(oneArticle);

    return (
        <div className="article-screen">
            <div class="grid grid-cols-2">
                <div class="bg-gray-200 p-4">
                    <h1>{oneArticle[0].title}</h1>
                </div>
                <div class="bg-gray-300 p-4">
                    <h4>{oneArticle[0].created_at}</h4>
                </div>
            </div>
            <p>{oneArticle[0].article}</p>
            <p>{oneArticle[0].username}</p>
        </div>
    );
}