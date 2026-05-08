import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { LoginDTO } from "../DTO/login.dto";
import { JwtService } from "@nestjs/jwt/dist/jwt.service";
import { FindUserByEmailRepository } from "../repository";
import * as bcrypt from "bcrypt";
@Injectable()
export class LoginUseCase {
    constructor(private readonly finduserbyemailrepository: FindUserByEmailRepository,
        private readonly jwtservice: JwtService,
        private readonly logger: Logger
    ) {}
 async execute(data: LoginDTO) {
    this.logger.log("iniciando login");
    const user = await this.finduserbyemailrepository.findByEmail(data.email);
    if (!user) {
        throw new BadRequestException("email ou senha inválidos");
    }
    const isvalid = await bcrypt.compare(data.password, user.passwordhash);
    if (!isvalid) {
        throw new BadRequestException("email ou senha inválidos");
    }
    const payload = { sub: user.id, email: user.email };
    
    const accessToken = this.jwtservice.sign(payload);
    this.logger.log("login realizado com sucesso");
    return { accessToken, user: { id: user.id, name: user.name, email: user.email } };
 }
}