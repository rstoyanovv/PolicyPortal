import { Routes, Route } from "react-router-dom";
import ArticlesFeedScreen from "../screens/ArticlesFeedScreen";
import SingleArticleScreen from "../screens/SingleArticleScreen";

export default function ArticlesInnerRouter() {
    return (
        <Routes>
            <Route path="/" element={<ArticlesFeedScreen />} />
            <Route path=":id" element={<SingleArticleScreen />} />
        </Routes>
    );
}