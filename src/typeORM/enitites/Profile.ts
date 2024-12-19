import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity({ name: 'profile' })
export class Profile {
  @PrimaryGeneratedColumn({ type: 'bigint' }) // Add a primary key
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @Column()
  address: string;

  @OneToOne(() => User, (user) => user.profile) // Define the relationship
  user: User;
}
