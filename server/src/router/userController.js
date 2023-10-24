import express from 'express';
import { validateEmail } from '../functions/validateEmail.js';

class UserController {
    constructor({ userService }) {
        this.userService = userService;
        this.router = express.Router();
        this.router.post('/registration', this.registration);
        this.router.post('/login', this.login);
    }

    registration = async (req, res) => {
        try {
            const { username, email, password } = req.body;

            if (!validateEmail(email)) {
                console.log('Invalid email');
            }
            await this.userService.createNewUser(username, email, password);
            res.status(201).json({
                status: 'success',
                message: "A new user was created successfully!",
                data: {
                    username: username,
                    email: email,
                }
            });
        } catch (err) {
            res.status(500).json({
                status: 'failed',
                message: err.message
            });
        }
    };

    login = async (req, res) => {
        try {
            const { email, password } = req.body;
            const token = await this.userService.login(email, password);
            res.status(200).json({
                status: 'success',
                data: {
                    token: token,
                }
            });
        } catch (err) {
            res.status(500).json({
                status: 'failed',
                message: err.message
            });
        }
    }
}

export default UserController;