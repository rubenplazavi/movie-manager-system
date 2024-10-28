import { Inject, Injectable } from "@nestjs/common";
import { UserRepository } from '../persistence/user-typeorm.repository';
import { UserEntity } from "../persistence/user.entity";

@Injectable()
export class UserFinderService{
    constructor(
        @Inject() private userRepository: UserRepository
    ){}
    async findAllUsers(): Promise<UserEntity[]>{
        return this.userRepository.findAll();
    }
}