import { Body, Controller, Inject, Post } from '@nestjs/common';
import { usersConfig } from '../config/users.config';
import {} from '../services/user-finder.service';
import { UserCreatorService } from '../services/user-creator.service';
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller(usersConfig.routes.global)
export class UserPostController {
  constructor(
    @Inject() private readonly userCreatorService: UserCreatorService,
  ) {}
  @Post()
  async create(@Body() createUserData: CreateUserDto) {
    return await this.userCreatorService.runGeneralUser(createUserData);
  }
}
