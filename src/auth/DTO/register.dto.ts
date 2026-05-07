import { IsOptional, isString, IsString } from "class-validator";

export class RegisterDTO {
 @IsString()
 @IsOptional()
 name?: string;

 @IsString()
 email: string;

 @IsString()
 password: string;
}