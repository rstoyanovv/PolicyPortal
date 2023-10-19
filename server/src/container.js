import { asClass, asValue, createContainer } from 'awilix';

import JwtService from './middleware/jwtService';

const container = createContainer();

container.register({
    jwtService: asClass(JwtService).singleton()
})