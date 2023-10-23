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
}

export default ArticleRepository;