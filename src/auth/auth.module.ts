import { JwtModule } from "@nestjs/jwt";
import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { Logger } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { JwtStrategy } from "./jwt.strategy";
import * as UseCases from "./usecase";
import * as Repositories from "./repository";

const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: "1d" },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtAuthGuard,
    PrismaService,
    Logger,
    JwtStrategy,
    ...repositories,
    ...useCases,
  ],
})
export class AuthModule {}
