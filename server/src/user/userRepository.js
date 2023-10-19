class UserRepository {
    constructor({ dbPool }) {
        this.dbPool = dbPool;
    }

    insertNewUserIntoDatabase = async ( username, email, password ) => {
        await this.dbPool.query('INSERT INTO policyportal.users (username, email, password) VALUES ($1, $2, $3)', 
        [ username, email, password ]);
    }
}

export default UserRepository;