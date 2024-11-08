import { Controller, Post, UseGuards, Request, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }


  @HttpCode(HttpStatus.OK)//local.strategy içindeki yer alan ve auth.service'den gelen validatorUser kullanılır
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    //kullanıcı id bilgisine göre token oluşturma
    console.log("token alma")
    const token = await this.authService.login(req.user.id)
    console.log("token alma 1")
    return { id: req.user.id, token }
  }


  @HttpCode(HttpStatus.OK)//local.strategy içindeki yer alan ve auth.service'den gelen validatorUser kullanılır
  @UseGuards(AuthGuard('local'))
  @Post('login1')
  async login1(@Request() req){
    return req.user
  }
}



/*

  @HttpCode(HttpStatus.OK)//local.strategy içindeki yer alan ve auth.service'den gelen validatorUser kullanılır
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req){
    return req.user
  }


  */