import { Injectable } from "@nestjs/common";
import { LoginUseCase, RegisterUseCase } from "./usecase";
import { RegisterDTO } from "./DTO/register.dto";
import { LoginDTO } from "./DTO/login.dto";

@Injectable()
export class AuthService {
    constructor(private readonly registerusecase: RegisterUseCase,
        private readonly loginusecase: LoginUseCase
    ) {}

    async register(data: RegisterDTO) {
        return await this.registerusecase.execute(data);
    }

    async login(data: LoginDTO) {
        return await this.loginusecase.execute(data);
    }
}
