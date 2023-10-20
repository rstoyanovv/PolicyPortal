class UserService {
    constructor({ jwtService, passwordHashingService, userRepository }){
        this.jwtService = jwtService;
        this.passwordHashingService = passwordHashingService;
        this.userRepository = userRepository;
    }

    createNewUser = async( username, email, password ) => {
        const hashPassword = await this.passwordHashingService.hashPassword(password);
        await this.userRepository.insertNewUserIntoDatabase(username, email, hashPassword);
    }
}

export default UserService;