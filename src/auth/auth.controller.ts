import { Controller, Post, UseGuards,Request, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @HttpCode(HttpStatus.OK)//local.strategy içindeki yer alan ve auth.service'den gelen validatorUser kullanılır
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req){
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