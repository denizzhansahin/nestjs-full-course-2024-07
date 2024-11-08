import { registerAs } from "@nestjs/config";
import { JwtModule, JwtModuleOptions } from "@nestjs/jwt";


export default registerAs("jwt", ():JwtModuleOptions=>({
    secret:process.env.JWT_SECRET,
    signOptions:{
        expiresIn:process.env.JWT_EXPIRE_IN,
    }
}))