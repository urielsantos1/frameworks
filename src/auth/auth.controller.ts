import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { RegisterDTO } from "./DTO/register.dto";
import { LoginDTO } from "./DTO/login.dto";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { CurrentUser } from "./current-user.decorator";

@Controller("auth")
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @Post("register")
  async register(@Body() data: RegisterDTO) {
    return await this.authservice.register(data);
  }

  @Post("login")
  async login(@Body() data: LoginDTO) {
    return await this.authservice.login(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get("me")
  async me(@CurrentUser() user: { id: string; email: string; name: string }) {
    return user;
  }
}