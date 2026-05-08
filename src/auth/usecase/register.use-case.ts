import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { FindUserByEmailRepository } from "../repository/Find-user-by-email.repository";
import { CreateUserRepository } from "../repository/create-user.repository";
import { JwtService } from "@nestjs/jwt/dist/jwt.service";
import { RegisterDTO } from "../DTO/register.dto";
import * as bcrypt from "bcrypt";
import { access } from "fs";

@Injectable()
export class RegisterUseCase {
    constructor(private readonly finduserbyemailrepository: FindUserByEmailRepository, 
        private readonly createuserrepository: CreateUserRepository,
    private readonly jwtservice: JwtService,
private readonly logger: Logger) {}

    async execute(data: RegisterDTO) {
        this.logger.log("registrando usuário");
        const existinguser = await this.finduserbyemailrepository.findByEmail(data.email);
        if (existinguser) {
            throw new BadRequestException("email já existe");
        }
       const passwordhash = await bcrypt.hash(data.password, 10);
       const user = await this.createuserrepository.create({
        name: data.name,
        email: data.email,
        passwordhash,
         });
         const payload = { sub: user.id, email: user.email };
         const accessToken = this.jwtservice.sign(payload);
         this.logger.log("usuário registrado com sucesso");
            return { accessToken, user };
    }
}