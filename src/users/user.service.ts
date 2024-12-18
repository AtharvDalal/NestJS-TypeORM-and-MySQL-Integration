import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeORM/enitites/User';
import { CreateUserParams } from 'src/types/types';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  fetchUser() {
    return this.userRepository.find();
  }

  CreateUser(userDeatils: CreateUserParams) {
    const newUser = this.userRepository.create({
      ...userDeatils,
      createdAt: new Date(),
    });
    return this.userRepository.save(newUser);
  }
}
