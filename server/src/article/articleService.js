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
}

export default ArticleService;