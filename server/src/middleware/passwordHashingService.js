import bcrypt from 'bcrypt';
import { passwordConfig } from '../environment.js'

class PasswordHashingService {
    constructor() {
        this.saltRounds = passwordConfig.saltRounds;
    }

    async hashPassword( password ) {
        try {
            return await bcrypt.hash(password, this.saltRounds);
        } catch (err) {
            console.error(err);
        }
    }
}

export default PasswordHashingService;