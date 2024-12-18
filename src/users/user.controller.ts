import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';

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
}
