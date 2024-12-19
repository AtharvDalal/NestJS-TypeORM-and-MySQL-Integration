import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/typeORM/enitites/Profile';
import { User } from 'src/typeORM/enitites/User';
import {
  CreateUserParams,
  UpdateUserParams,
  userpostParams,
} from 'src/types/types';
import { Repository } from 'typeorm';
import { CreateProfileParams } from 'src/types/types';
import { userPost } from 'src/typeORM/enitites/Post';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private ProfileRepository: Repository<Profile>,
    @InjectRepository(userPost)
    private PostUserRepository: Repository<userPost>,
  ) {}

  fetchUser() {
    return this.userRepository.find({ relations: ['profile', 'userpost'] });
  }

  CreateUser(userDeatils: CreateUserParams) {
    const newUser = this.userRepository.create({
      ...userDeatils,
      createdAt: new Date(),
    });
    return this.userRepository.save(newUser);
  }

  UpdateUser(id: number, updateuserDeatils: UpdateUserParams) {
    return this.userRepository.update({ id }, { ...updateuserDeatils });
  }

  deleteUser(id: number) {
    this.userRepository.delete({ id });
  }

  async createProfile(id: number, profileDetails: CreateProfileParams) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST);

    const newProfile = this.ProfileRepository.create(profileDetails);
    const savedProfile = await this.ProfileRepository.save(newProfile);
    user.profile = savedProfile;
    return this.userRepository.save(user);
  }

  async getPorfile(id: number) {
    const user = await this.userRepository.findOne({
      where: { id: id },
      relations: ['profile'], // Include the profile relation
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    if (!user.profile) {
      throw new NotFoundException(`Profile for User ID ${id} not found`);
    }

    return user.profile;
  }

  async createUserPost(id: number, createUserpost: userpostParams) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user)
      throw new HttpException('user Not Found', HttpStatus.BAD_REQUEST);

    const newPost = this.PostUserRepository.create({ ...createUserpost, user });
    return await this.PostUserRepository.save(newPost);
  }
}
