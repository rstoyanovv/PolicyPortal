import { Routes, Route } from "react-router-dom";
import { ArticlesProvider } from "../context/articleContext";
import ArticlesFeedScreen from "../screens/ArticlesFeedScreen";
import SingleArticleScreen from "../screens/SingleArticleScreen";

export default function ArticlesInnerRouter() {
    return (
        <ArticlesProvider>
            <Routes>
                <Route path="/" element={<ArticlesFeedScreen />} />
                <Route path=":id" element={<SingleArticleScreen />} />
            </Routes>
        </ArticlesProvider>
    );
}