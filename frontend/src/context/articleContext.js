import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ArticlesContext = createContext();

export function useArticles() {
    return useContext(ArticlesContext);
}

export function ArticlesProvider({ children }) {
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
        <ArticlesContext.Provider value={articles}>
            {children}
        </ArticlesContext.Provider>
    );
}