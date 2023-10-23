import express from 'express';

class AdminController {
    constructor({ adminService }) {
        this.adminService = adminService;
        this.router = express.Router();
        this.router.post('/login', this.login);
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
}

export default AdminController;