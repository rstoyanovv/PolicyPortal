import jwt from 'jsonwebtoken';
import { jwtConfig } from '../environment.js';

function auth (req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).json({
            status: 'failed',
            message: 'Unauthorized!',
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        jwt.verify(token, jwtConfig.secret, (err, user) => {
            if (err) return res.sendStatus(403)
            req.user = user
            next()
        })
    } catch (err) {
        res.status(401).json({
            status: 'failed',
            message: 'Unauthorized!',
        })
    }
}

export { auth };