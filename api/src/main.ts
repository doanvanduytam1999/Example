import * as dotenv from 'dotenv';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

dotenv.config();
const port = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const swaggerConfig = new DocumentBuilder().addBearerAuth().build();
  const doc = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, doc);
  
  await app.listen(port);
  Logger.log(`App running on port ${port}...`,'Boostrap');
}
bootstrap();
