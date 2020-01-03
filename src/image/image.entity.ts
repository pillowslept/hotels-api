import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { HotelEntity } from 'hotel/hotel.entity';

@Entity('image')
export class ImageEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  url: string;

  @ManyToOne(() => HotelEntity)
  hotel: HotelEntity;

  @CreateDateColumn()
  createdAt: Date;

}
