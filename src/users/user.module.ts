import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeORM/enitites/User';
import { Profile } from 'src/typeORM/enitites/Profile';
import { userPost } from 'src/typeORM/enitites/Post';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, userPost])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
