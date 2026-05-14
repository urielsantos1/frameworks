import { Injectable } from "@nestjs/common";
import e from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";

type Jwtpayload = {
    sub: string;
    email: string;
};
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: process.env.JWT_SECRET as string,
        });
    }
    async validate(payload: Jwtpayload) {
        return { userId: payload.sub, email: payload.email };
}
}