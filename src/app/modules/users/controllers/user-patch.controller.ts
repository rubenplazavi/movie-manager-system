import { Body, Controller, Inject, Param, ParseUUIDPipe, Patch } from '@nestjs/common';
import { usersConfig } from '../config/users.config';
import {} from '../services/user-finder.service';
import { UpdateUserRequestDto } from '../dtos/update-user-request.dto';
import { UserUpdater } from '../services/user-updater.service';

@Controller(usersConfig.routes.global)
export class UserGetController {
  constructor(@Inject() private readonly userUpdater: UserUpdater) {}
  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserData: UpdateUserRequestDto,
  ) {
    return await this.userUpdater.run(id, updateUserData);
  }
}
