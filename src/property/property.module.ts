import { Module, ValidationPipe } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { APP_PIPE } from '@nestjs/core';
import { PropertyService } from './property.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entities';

@Module({
  controllers: [PropertyController],
  providers: [PropertyService],
  imports:[TypeOrmModule.forFeature([Property])]
  
/*
  providers:[//özel olarak pip ekleme
    {
      provide:APP_PIPE,
      useValue:new ValidationPipe({
        whitelist:true,
        forbidNonWhitelisted:true,
        transform:true,
        transformOptions:{
          enableImplicitConversion:true
        }
      })
    }
  ]
*/
})
export class PropertyModule {}
