import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from 'src/config/environment/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      //validationSchema: JoiValidationSchema,
    }),
  ],
  controllers: [AppController]
})
export class AppModule {}
