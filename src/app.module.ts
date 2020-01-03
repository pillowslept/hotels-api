import { Module } from '@nestjs/common';
import { HotelModule } from 'hotel/hotel.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), HotelModule],
  exports: [],
  providers: [],
})
export class AppModule { }
