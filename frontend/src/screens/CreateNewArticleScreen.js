import { useState } from 'react';
import ArticleApprovalMessage from '../components/ArticleApprovalMessage';
import ArticleForm from '../components/ArticleForm';
import '../styles/createNewArticle.css';

export default function CreateNewArticleScreen() {
    const [ArticleSubmitted, setArticleSubmitted] = useState(false);

    const handleSubmittion = () => {
        setArticleSubmitted(true);
    }

    return (
        <div className="create-new-article-container">
            {
                ArticleSubmitted ? (
                    <ArticleApprovalMessage />
                ) : (
                    <ArticleForm onSubmit={handleSubmittion} />
            )}
        </div>
    );
}