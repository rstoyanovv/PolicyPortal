import { asClass, asValue, createContainer } from 'awilix';

import JwtService from './middleware/jwtService.js';
import PasswordHashingService from './middleware/passwordHashingService.js';
import { pool } from './dbConnection/dbConnector.js';
import UserController from './router/userController.js';
import UserRepository from './user/userRepository.js';
import UserService from './user/userService.js';
import ArticleController from './router/articleController.js';
import ArticleService from './article/articleService.js';
import ArticleRepository from './article/articleRepository.js';
import AdminController from './router/admin/adminController.js';
import AdminService from './admin/adminService.js';
import AdminRepository from './admin/adminRepository.js';

const container = createContainer();

container.register({
    jwtService: asClass(JwtService).singleton(),
    passwordHashingService: asClass(PasswordHashingService).singleton(),
    dbPool: asValue(pool),
    userController: asClass(UserController).singleton(),
    userRepository: asClass(UserRepository).singleton(),
    userService: asClass(UserService).singleton(),
    articleController: asClass(ArticleController).singleton(),
    articleService: asClass(ArticleService).singleton(),
    articleRepository: asClass(ArticleRepository).singleton(),
    adminController: asClass(AdminController).singleton(),
    adminService: asClass(AdminService).singleton(),
    adminRepository: asClass(AdminRepository).singleton()
});

export default container;