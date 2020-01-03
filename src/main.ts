import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { config } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(config.PREFIX);
  await app.listen(config.PORT);

  Logger.log(`Server started at port: ${config.PORT}`, 'Bootstrap');
}

bootstrap();
