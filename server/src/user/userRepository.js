import User from "./user.js";

class UserRepository {
    constructor({ dbPool }) {
        this.dbPool = dbPool;
    }

    insertNewUserIntoDatabase = async ( username, email, password ) => {
        await this.dbPool.query('INSERT INTO policyportal.users (username, email, password) VALUES ($1, $2, $3)', 
        [username, email, password]);
    }

    fetchUser = async ( email ) => {
        const result = await this.dbPool.query('SELECT username, email, password FROM policyportal.users WHERE email = $1', [email]);
    
        if(result.rows.length === 0) {
            throw new Error("User not found!");
        }

        return new User({
            username: result.rows[0].username,
            email: result.rows[0].email,
            password: result.rows[0].password
        });
    }

    createArticle = async ( id_of_user, title, article ) => { 
        await this.dbPool.query('INSERT INTO policyportal.articles (upload_by, title, article, status) VALUES ($1, $2, $3, $4)',
        [id_of_user, title, article, 'WAITING FOR APPROVAL']);
    }
}

export default UserRepository;