import { EntitySchema, EntityTarget } from "typeorm";
import { TypeOrmRepository } from "../../shared/persistence/typeorm.repository";
import { UserEntity } from "./user.entity";

export class userRepository extends TypeOrmRepository<UserEntity>{
	async create(userEntity: UserEntity): Promise<UserEntity> {
		return this.persistEntity(userEntity);
	}
    protected entitySchema(): EntityTarget<UserEntity> {
		return UserEntity;
	}
}