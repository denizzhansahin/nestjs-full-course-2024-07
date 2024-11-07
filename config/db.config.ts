/*


import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import * as path from 'path';
import { registerAs } from '@nestjs/config';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { PropertyFeature } from 'src/entities/propertyFeature.entity';
import { User } from 'src/entities/user.entity';
import { Property } from 'src/entities/property.entities';

export default registerAs(
  'dbconfig.dev',
  (): SqliteConnectionOptions => ({
    // Don't put this here, Instead put in the env file
    type: 'sqlite',
    database: 'database2.sqlite',
    synchronize: true,
    logging: false,
    entities: [Property,PropertyFeature,User],
    migrations: [],
    subscribers: [],
  }),
);


*/