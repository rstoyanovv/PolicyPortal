import { createContext, useContext, useEffect } from "react";
import axios from "axios";

const ArticleContext = createContext();

export const ArticleProvider = () => {
    /*const [articles, setArticles] = useContext([]);

    useEffect(() => {
        const fetchArticles = () => {
            try {
                const result = axios.get(`/api/articles`);
                const articles = result.data;
                setArticles(articles);
            } catch (err) {
                console.error(err);
            }
        };
        fetchArticles();
    }, []);*/

    //Console test
    console.log(articles);

    return (
        <ArticleContext.Provider value={{ articles, setArticles, fetchArticles}}>
            {children}
        </ArticleContext.Provider>
    );
};

export const articlesData = () => {
    return useContext(ArticleContext);
};