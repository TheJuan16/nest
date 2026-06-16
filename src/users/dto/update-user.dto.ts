import { PartialType } from '@nestjs/mapped-types';
import { RegisterDto } from './Register.dto';

export class UpdateUserDto extends PartialType(RegisterDto) {}
