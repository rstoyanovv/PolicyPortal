import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ArticlesContext = createContext();

export function useArticles() {
    return useContext(ArticlesContext);
}

// 'Loading things' here is absolutely necessary!
export function ArticlesProvider({ children }) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const result = await axios.get(`/api/articles`);
                const articlesData = Object.values(result.data.result);
                setArticles(articlesData);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    return (
        <ArticlesContext.Provider value={articles}>
            {loading ? <div>Loading...</div> : children}
        </ArticlesContext.Provider>
    );
}
