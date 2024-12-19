import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UpdateUserdto } from './dtos/updateUser.dto';
import { ProfileDto } from './dtos/profile.dto';
import { Profile } from 'src/typeORM/enitites/Profile';
import { userPostdto } from './dtos/userPost.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUser() {
    const user = await this.userService.fetchUser();
    return user;
  }

  @Post()
  createUser(@Body() createUser: CreateUserDto) {
    return this.userService.CreateUser(createUser);
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateuser: UpdateUserdto,
  ) {
    await this.userService.UpdateUser(id, updateuser);
  }

  @Delete(':id')
  async deletUserbyId(@Param('id', ParseIntPipe) id: number) {
    await this.userService.deleteUser(id);
  }

  @Post(':id/profile')
  createProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() createProfile: ProfileDto,
  ) {
    return this.userService.createProfile(id, createProfile);
  }

  @Get(':id/profile')
  async getProfile(@Param('id') id: number): Promise<Profile> {
    return this.userService.getPorfile(id);
  }

  @Post(':id/posts')
  createUserPost(@Param('id') id: number, @Body() userPost: userPostdto) {
    return this.userService.createUserPost(id, userPost);
  }
}
