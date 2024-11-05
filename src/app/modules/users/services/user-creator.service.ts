import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserRepository } from '../persistence/user-typeorm.repository';
import { UserEntity } from '../persistence/user.entity';
import { CreateUserRequestDto } from '../dtos/create-user-request.dto';
import { v4 as uuid } from 'uuid';
import { Roles } from '../../shared/enums/roles.enum';
import { CreatedUserResponse } from '../dtos/create-user-response.dto';
import { CustomInternalServerErrorException } from '../../shared/exceptions/custom-internal-server-error';

@Injectable()
export class UserCreatorService {
  constructor(@Inject() private userRepository: UserRepository) {}
  async runGeneralUser(
    userData: CreateUserRequestDto,
  ): Promise<CreatedUserResponse> {
    try {
      const userExist = await this.userRepository.findOne({
        where: { email: userData.email },
      });
      if (userExist) {
        throw new BadRequestException(
          `user with email ${userData.email} already exist`,
        );
      }
      const user = UserEntity.create(
        uuid(),
        userData.name,
        userData.email,
        userData.password,
        Roles.GENERAL,
      );
      const { password, ...createdUser } =
        await this.userRepository.persistEntity(user);

      return createdUser;
    } catch (error) {
      this.handleErrors(error);
    }
  }

  private handleErrors(error){
    if (error instanceof BadRequestException) {
      throw error;
    } else {
      throw new CustomInternalServerErrorException(
        `An internal server error occurred`,
        error.message,
      );
    }
  }
}
