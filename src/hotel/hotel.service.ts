import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HotelEntity } from './hotel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HotelService {

  private readonly RELATIONS: Array<string> = ['images'];

  constructor(
    @InjectRepository(HotelEntity)
    private hotelRepository: Repository<HotelEntity>,
  ) {
  }

  async getAll(): Promise<HotelEntity[]> {
    return await this.hotelRepository.find({ relations: this.RELATIONS });
  }

  async getById(id: number): Promise<HotelEntity> {
    const team = await this.hotelRepository.findOne({ where: { id }, relations: this.RELATIONS });

    return this.validateExistence(team);
  }

  private validateExistence(hotelEntity: HotelEntity): HotelEntity {
    if (!hotelEntity) {
      throw new NotFoundException('Hotel does not exists');
    }

    return hotelEntity;
  }

}
