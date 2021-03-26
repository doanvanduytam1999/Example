import { Phone } from './phone.entity';
import { Module } from '@nestjs/common';
import { PhoneService } from './phone.service';
import { PhoneController } from './phone.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Phone])],
  providers: [PhoneService],
  controllers: [PhoneController]
})
export class PhoneModule {}
