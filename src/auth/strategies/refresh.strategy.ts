import { ConfigType } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import jwtConfig from "../config/jwt.config";
import { AuthJwtPayload } from "../types/auth-jwtPayload";
import { Inject, Injectable } from "@nestjs/common";
import refreshJwtConfig from "../config/refresh-jwt.config";


@Injectable()
export class RefreshJwtStrategy extends PassportStrategy(Strategy,"refresh-jwt") {
    constructor(@Inject(refreshJwtConfig.KEY) private refreshjwtFromRequest: ConfigType<typeof refreshJwtConfig>) {
        //token ile ilgili işlem bölümü
        super(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: refreshjwtFromRequest.secret,
                ignoreExpiration:false,
            }
        )
    }

    validate(payload: AuthJwtPayload) {
        console.log("gelen token bilgisine göre id döndürme")
        return { id: payload.sub }
    }
}