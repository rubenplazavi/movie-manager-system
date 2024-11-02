import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { globalPrefix } from './config/routes/global-prefix';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.setGlobalPrefix(globalPrefix);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
