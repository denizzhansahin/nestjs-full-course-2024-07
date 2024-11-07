import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './entities/property.entities';
import { PropertyFeature } from './entities/propertyFeature.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [PropertyModule,
    TypeOrmModule.forRoot({ //veya getCongig
      type: 'sqlite',
      database: 'database1.sqlite',
      synchronize: true,
      logging: false,
      entities: [Property,PropertyFeature,User],
      migrations: [],
      subscribers: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
