import { DeleteResult, UpdateResult } from "typeorm"
import { UserEntity } from "../persistence/user.entity"
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity"
import { SelectOptions } from "../../shared/types/find-options.type"

export interface IUserRepository{
    create(userEntity: UserEntity): Promise<UserEntity> 
	findAll(): Promise<UserEntity[]>

	findOne(options: SelectOptions): Promise<UserEntity>

	update(id: string, partialUser: QueryDeepPartialEntity<UserEntity>): Promise<UpdateResult>
	delete(id: string): Promise<DeleteResult>
}