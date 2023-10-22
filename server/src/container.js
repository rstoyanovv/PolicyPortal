import { asClass, asValue, createContainer } from 'awilix';

import JwtService from './middleware/jwtService.js';
import PasswordHashingService from './middleware/passwordHashingService.js';
import { pool } from './dbConnection/dbConnector.js';
import UserController from './router/userController.js';
import UserRepository from './user/userRepository.js';
import UserService from './user/userService.js';

const container = createContainer();

container.register({
    jwtService: asClass(JwtService).singleton(),
    passwordHashingService: asClass(PasswordHashingService).singleton(),
    dbPool: asValue(pool),
    userController: asClass(UserController).singleton(),
    userRepository: asClass(UserRepository).singleton(),
    userService: asClass(UserService).singleton()
});

export default container;