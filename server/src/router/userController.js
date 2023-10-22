import express from 'express';
import { validateEmail } from '../functions/validateEmail.js';

class UserController {
    constructor({ userService }) {
        this.userService = userService;
        this.router = express.Router();
        this.router.post('/registration', this.registration);
        this.router.post('/login-user', this.login);
        this.router.post('/create-article', this.createArticle);
    }

    registration = async (req, res) => {
        try {
            const { username, email, password } = req.body;
            if (!validateEmail(email)) {
                console.log('Invalid email');
            }
            await this.userService.createNewUser(username, email, password);
            res.status(201).json({ message: "A new user was created successfully!" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

    login = async (req, res) => {
        try {
            const { email, password } = req.body;
            const token = await this.userService.login(email, password);
            res.status(200).send({ token });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    createArticle = async (req, res) => {
        try {
            const { id_of_user, title, article } = req.body;
            await this.userService.createArticle(id_of_user, title, article);
            res.status(201).json({ message: "New article successfully created!" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

export default UserController;