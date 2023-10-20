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

    login = async( email, password ) => {
        const user = await this.userRepository.fetchUser(email);
        const isPasswordCorrect = await this.passwordHashingService.comparePassword(password, user.password);
        
        if(!isPasswordCorrect) {
            throw new Error("Invalid password!");
        }
        
        const token = this.jwtService.generateToken({ email: user.email });
        return token;	
    }
}

export default UserService;