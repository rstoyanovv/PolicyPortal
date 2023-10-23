import Admin from "./admin.js";

class AdminRepository {
    constructor({ dbPool }) {
        this.dbPool = dbPool;
    }

    fetchAdmin = async (email) => {
        const result = await this.dbPool.query('SELECT username, email, password FROM policyportal.admins WHERE email = $1', 
            [email]);

        if (result.rows.length === 0) {
            throw new Error("User not found!");
        }

        return new Admin({
            username: result.rows[0].username,
            email: result.rows[0].email,
            password: result.rows[0].password
        });
    }

    updateStatusOfArticle = async (articleId, status) => {
        await this.dbPool.query('UPDATE policyportal.articles SET status = $1 WHERE id = $2',
            [status, articleId]);
    }
}

export default AdminRepository;