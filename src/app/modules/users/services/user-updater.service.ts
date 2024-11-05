import { Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "../persistence/user-typeorm.repository";
import { UpdateUserRequestDto } from '../dtos/update-user-request.dto';

@Injectable()
export class UserUpdater{
    constructor(@Inject() private userRepository: UserRepository){}

    async run(id: string, userUpdateDto: UpdateUserRequestDto){
        
        return this.userRepository.update(id, userUpdateDto)
    }
}