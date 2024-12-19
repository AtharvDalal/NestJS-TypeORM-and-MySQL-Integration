import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeORM/enitites/User';
import { UserService } from './users/user.service';
import { UserModule } from './users/user.module';
import { Profile } from './typeORM/enitites/Profile';
import { userPost } from './typeORM/enitites/Post';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'sangam24',
      database: 'nestjs_sql',
      entities: [User, Profile, userPost],
      synchronize: true,
    }),

    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
