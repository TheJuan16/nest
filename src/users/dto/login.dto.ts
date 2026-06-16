import { IsEmail, isNotEmpty, isString } from 'class-validator';
export class LoginDto {
  @isNotEmpty()
  @isString()
  @IsEmail()
  email!: string;
  @isNotEmpty()
  @isString()
  password!: string;
}
