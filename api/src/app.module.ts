import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PhoneModule } from './phone/phone.module';

dotenv.config();

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),TypeOrmModule, UserModule, PhoneModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
