import express from 'express';

class ArticleController {
    constructor({ articleService }) {
        this.articleService = articleService;
        this.router = express.Router();
        this.router.post('/create-article', this.createArticle);
        this.router.post('/comment', this.comment);
        this.router.delete('/delete-article', this.deleteArticle);
        this.router.delete('/delete-comment', this.deleteComment);
    }

    createArticle = async (req, res) => {
        try {
            const { id_of_user, title, article } = req.body;
            await this.articleService.createArticle(id_of_user, title, article);
            res.status(201).json({ message: "New article successfully created!" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    comment = async (req, res) => {
        try {
            const { id_of_article, id_of_user, text } = req.body;
            await this.articleService.comment(id_of_article, id_of_user, text);
            res.status(201).json({ message: "Comment successfully created!" });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: err.message });
        }
    }

    deleteArticle = async (req, res) => {
        try {
            const { id_of_article } = req.body;
            await this.articleService.deleteArticle( id_of_article );
            res.status(200).json({ message: "The article has been successfully deleted." });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    deleteComment = async (req, res) => {
        try {
            const { id_of_comment } = req.body;
            await this.articleService.deleteComment( id_of_comment );
            res.status(200).json({ message: "The comment has been successfully deleted." });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

export default ArticleController;