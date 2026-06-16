import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { LoginDto } from 'src/users/dto/login.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(usersService: UsersService, j: JwtService) {}
    async login(loginDto: LoginDto) {
        const user = await this.usersService.findByEmail(loginDto.email);
        if(!user) throw new UnauthorizedException('credenciales invalidas');
        const Match = await bcrypt.compare(loginDto.password, user.password);
        if(!Match) throw new UnauthorizedException('credenciales invalidas');
        const payload={ sub:user.id, email:user.email}
        return{ access_token: this.jwtService.sign(payload),
            user:{id:user.id, email:user.email, name:user.name}
        }
} 
}
