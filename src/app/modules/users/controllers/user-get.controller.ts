import { Controller, Get, Inject } from "@nestjs/common";
import { usersConfig } from "../config/users.config";
import { ApiTags } from "@nestjs/swagger";
import { UserRepository } from '../persistence/user-typeorm.repository';
import { UserFinderService } from '../services/user-finder.service';

@Controller(usersConfig.routes.global)
export class UserGetController{
    constructor(
        @Inject() private readonly userFinderService: UserFinderService,
    ){}
    @Get()
    async getAll(){
        return await this.userFinderService.findAllUsers();
    }
}