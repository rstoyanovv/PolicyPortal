class UserService {
    constructor({ jwtService, passwordHashingService, userRepository }){
        this.jwtService = jwtService;
        this.passwordHashingService = passwordHashingService;
        this.userRepository = userRepository;
    }

    createNewUser = async( username, email, password ) => {
        const hashPassword = this.passwordHashingService.hashPassword(password);
        //console.log(hashPassword);
        await this.userRepository.insertNewUserIntoDatabase(username, email, hashPassword);
    }
}

export default UserService;