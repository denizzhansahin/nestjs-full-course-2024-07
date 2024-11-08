import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './entities/property.entities';
import { PropertyFeature } from './entities/propertyFeature.entity';
import { User } from './entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      expandVariables:true
    }),PropertyModule,
    TypeOrmModule.forRoot({ //veya getCongig
      type: 'sqlite',
      database: 'database2.sqlite',
      synchronize: true,
      logging: false,
      entities: [Property,PropertyFeature,User],
      migrations: [],
      subscribers: [],
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
