import { DeleteResult, EntitySchema, EntityTarget, FindManyOptions, FindOneOptions, UpdateResult} from 'typeorm';
import { TypeOrmRepository } from "../../shared/persistence/typeorm.repository";
import { UserEntity } from "./user.entity";
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { IUserRepository } from '../interfaces/user-repository.interface';
import { SelectOptions } from '../../shared/types/find-options.type';

export class UserRepository extends TypeOrmRepository<UserEntity> implements IUserRepository{
    protected entitySchema(): EntityTarget<UserEntity> {
		return UserEntity;
	}

	async create(userEntity: UserEntity): Promise<UserEntity> {
		return this.persistEntity(userEntity);
	}
	async findAll(): Promise<UserEntity[]>{
		return this.findAllEntities();
	}

	//! Mirar FindOneOptions typeOrm
	async findOne(options: FindOneOptions){
		return this.findOneEntity(options);
	}

	async update(id: string, partialUser: QueryDeepPartialEntity<UserEntity>): Promise<UpdateResult>{
		return this.persistPartialEntity(id, partialUser);
	}

	async delete(id: string): Promise<DeleteResult>{
		return this.deleteEntity(id);
	}
}