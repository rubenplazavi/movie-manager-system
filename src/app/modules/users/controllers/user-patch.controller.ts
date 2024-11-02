import { Body, Controller, Inject, Patch } from '@nestjs/common';
import { usersConfig } from '../config/users.config';
import {} from '../services/user-finder.service';
import { UserCreatorService } from '../services/user-creator.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Controller(usersConfig.routes.global)
export class UserGetController {
  constructor(
    @Inject() private readonly userCreatorService: UserCreatorService,
  ) {}
  @Patch()
  async update(@Body() updateUserData: UpdateUserDto) {
    // return await this.userCreatorService.runGeneralUser(createUserData);
  }
}
