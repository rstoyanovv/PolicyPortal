class ArticleService {
    constructor({ articleRepository }) {
        this.articleRepository = articleRepository;
    }

    createArticle = async(id_of_user, title, article) => {
        await this.articleRepository.createArticle(id_of_user, title, article);
    } 

    comment = async(id_of_article, id_of_user, comment) => {
        await this.articleRepository.comment(id_of_article, id_of_user, comment);
    }

    deleteArticle = async (article_id) => {
        await this.articleRepository.deleteArticle(article_id);
    }

    deleteComment = async (id_of_comment) => {
        await this.articleRepository.deleteComment(id_of_comment);
    }

    fetchArticles = async () => {
        return await this.articleRepository.fetchArticles();
    }

    fetchArticlesByUserId = async (id_of_user) => {
        return await this.articleRepository.fetchArticlesByUserId(id_of_user);
    }
}

export default ArticleService;