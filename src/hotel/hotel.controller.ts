import { Controller, Get, Param } from '@nestjs/common';
import { HotelService } from './hotel.service';

@Controller('hotel')
export class HotelController {

  constructor(
    private readonly hotelService: HotelService,
  ) {}

  @Get()
  async getAll() {
    const hotels = await this.hotelService.getAll();

    return { hotels };
  }

  @Get('/:id')
  async getById(@Param('id') id: number) {
    const hotel = await this.hotelService.getById(id);

    return { hotel };
  }

}
