import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { AuthJwtPayload } from './types/auth-jwtPayload';

@Injectable()
export class AuthService {
    constructor(private userService:UserService,private jwtService:JwtService){}
    //kullanıcı bilgisine göre doğrulama yapma
    async validateUser(email:string,password:string) {
        console.log("email-şifre 1")
        const user = await this.userService.findByEmail(email)
        if(!user) throw new UnauthorizedException("User not found")
        const isPasswordMatch = await compare(password,user.password)
        if(!isPasswordMatch)
            throw new UnauthorizedException('Invalid credentials')
        return {id:user.id}
    }

    //gelen kullanıcı bilgisine göre token oluşturma
    login(userId:number){
        console.log("login token")
        const payload:AuthJwtPayload = {sub:userId}
        return this.jwtService.sign(payload)
    }
}
