import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../persistence/user-typeorm.repository';
import { UserEntity } from '../persistence/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { v4 as uuid } from 'uuid';
import { Roles } from '../../shared/enums/roles.enum';

@Injectable()
export class UserCreatorService {
  constructor(@Inject() private userRepository: UserRepository) {}
  async runGeneralUser(userData: CreateUserDto): Promise<UserEntity> {
    
    const userExist = await this.userRepository.findOne({where: {email: userData.email}});
    if(userExist){
        throw new BadRequestException(`user with email ${userData.email} does exist`);
    }
    const user = UserEntity.create(
      uuid(),
      userData.name,
      userData.email,
      userData.password,
      Roles.GENERAL,
    );
    return this.userRepository.persistEntity(user);
  }
}
