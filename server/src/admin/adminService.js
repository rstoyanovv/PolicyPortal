class AdminService {
    constructor({ adminRepository, jwtService, passwordHashingService }) {
        this.adminRepository = adminRepository;
        this.jwtService = jwtService;
        this.passwordHashingService = passwordHashingService;
    }

    login = async( email, password ) => {
        const admin = await this.adminRepository.fetchAdmin(email);
        const isPasswordCorrect = await this.passwordHashingService.comparePassword(password, admin.password);
        
        if(!isPasswordCorrect) {
            throw new Error("Invalid password!");
        }
        
        const token = this.jwtService.generateToken({ email: admin.email });
        return token;	
    }

    approve = async( articleId, status ) => {
        await this.adminRepository.updateStatusOfArticle(articleId, status);
    }
}

export default AdminService;