class ArticleRepository {
    constructor( { dbPool }) {
        this.dbPool = dbPool;
    }

    createArticle = async ( user, title, article ) => { 
        await this.dbPool.query('INSERT INTO policyportal.articles (upload_by, title, article, status) VALUES ($1, $2, $3, $4)',
        [user, title, article, 'WAITING FOR APPROVAL']);
    }

    comment = async ( article, user, comment ) => {
        await this.dbPool.query('INSERT INTO policyportal.comments (upload_by, for_article, comment) VALUES ($1, $2, $3)',
        [user, article, comment]);
    }

    deleteArticle = async (article_id) => {
        await this.dbPool.query('DELETE FROM policyportal.articles WHERE id = $1', 
            [article_id]);
    }

    deleteComment = async (id_of_comment) => {
        await this.dbPool.query('DELETE FROM policyportal.comments WHERE id = $1', 
            [id_of_comment]);
    }
}

export default ArticleRepository;