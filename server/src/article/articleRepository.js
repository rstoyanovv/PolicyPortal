class ArticleRepository {
    constructor({ dbPool }) {
        this.dbPool = dbPool;
    }

    createArticle = async (user, title, article) => {
        await this.dbPool.query('INSERT INTO policyportal.articles (upload_by, title, article, status) VALUES ($1, $2, $3, $4)',
            [user, title, article, 'WAITING FOR APPROVAL']);
    }

    comment = async (article, user, comment) => {
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

    fetchArticles = async () => {
        const result = await this.dbPool.query(
            `SELECT policyportal.users.username, policyportal.articles.title, 
                policyportal.articles.article, policyportal.articles.created_at,
                policyportal.articles.id 
                FROM policyportal.articles
                INNER JOIN policyportal.users 
                ON policyportal.articles.upload_by = policyportal.users.id
                WHERE status = 'APPROVED'
                ORDER BY created_at DESC`);

        if (result.rows.length > 0) {
            return result.rows;
        } else {
            return "No articles";
        }
    }

    fetchArticlesByUserId = async (id_of_user) => {
        const result = await this.dbPool.query(
            `SELECT policyportal.users.username, policyportal.articles.title, 
                policyportal.articles.article, policyportal.articles.created_at
                FROM policyportal.articles
                INNER JOIN policyportal.users 
                ON policyportal.articles.upload_by = policyportal.users.id
                WHERE policyportal.users.id = $1 AND policyportal.articles.status = 'APPROVED'
                ORDER BY policyportal.articles.created_at DESC`, [id_of_user]);

        if (result.rows.length > 0) {
            return result.rows;
        } else {
            return "This user has no articles";
        }
    }
}

export default ArticleRepository;