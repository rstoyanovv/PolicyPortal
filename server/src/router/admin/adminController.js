import express from 'express';

class AdminController {
    constructor({ adminService }) {
        this.adminService = adminService;
        this.router = express.Router();
        this.router.post('/login', this.login);
        this.router.post('/set-article-status', this.approve);
    }

    login = async (req, res) => {
        try {
            const { email, password } = req.body;
            const token = await this.adminService.login(email, password);
            res.status(200).send({ token });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: err.message });
        }
    }

    approve = async (req, res) => {
        try {
            const { id_of_article, status } = req.body;
            await this.adminService.approve(id_of_article, status);
            res.status(200).json({ message: "The article is after admin control." });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: err.message });
        }
    }
}

export default AdminController;