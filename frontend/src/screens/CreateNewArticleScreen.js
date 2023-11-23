import { useState } from 'react';
import ArticleApprovalMessage from '../components/ArticleApprovalMessage';
import ArticleForm from '../components/ArticleForm';
import '../styles/createNewArticle.css';

export default function CreateNewArticleScreen() {
    const [isArticleSubmitted, setIsArticleSubmitted] = useState(false);

    const handleSubmittion = () => {
        setIsArticleSubmitted(true);
    }

    return (
        <div className="create-new-article-container">
            {
                isArticleSubmitted ? (
                    <ArticleApprovalMessage />
                ) : (
                    <ArticleForm onSubmit={handleSubmittion} />
                )}
        </div>
    );
}