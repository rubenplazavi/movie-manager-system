import { Body, Controller, Inject, Post } from '@nestjs/common';
import { usersConfig } from '../config/users.config';
import {} from '../services/user-finder.service';
import { UserCreatorService } from '../services/user-creator.service';
import { CreateUserRequestDto } from '../dtos/create-user-request.dto';

@Controller(usersConfig.routes.global)
export class UserPostController {
  constructor(
    @Inject() private readonly userCreatorService: UserCreatorService,
  ) {}
  @Post()
  async create(@Body() createUserData: CreateUserRequestDto) {
    return await this.userCreatorService.runGeneralUser(createUserData);
  }
}
