import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { ImageEntity } from 'image/image.entity';

@Entity('hotel')
export class HotelEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;
  
  @Column({ type: 'decimal', precision: 5, scale: 2 })
  stars: Number;

  @Column()
  price: Number;

  @Column({ length: 100 })
  address: string;

  @OneToMany(() => ImageEntity, imageEntity => imageEntity.hotel)
  images: ImageEntity[];

  @CreateDateColumn()
  createdAt: Date;

}
