import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from 'src/config/environment/env.config';
import { typeOrmConfig } from 'src/config/orm/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      //validationSchema: JoiValidationSchema,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
  ],
  controllers: [AppController]
})
export class AppModule {}
