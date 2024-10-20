import { InjectDataSource } from '@nestjs/typeorm';
import {
  DataSource,
  DeleteResult,
  EntitySchema,
  EntityTarget,
  FindOneOptions,
  Repository,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class TypeOrmRepository<T> {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.repository = this.dataSource.getRepository(this.entitySchema());
  }

  private readonly repository: Repository<T>;
  protected abstract entitySchema(): EntityTarget<T>;
  async persistEntity(data: T): Promise<T> {
    return this.repository.save(data);
  }

  async persistPartialEntity(
    id: string,
    partialEntity: QueryDeepPartialEntity<T>,
  ): Promise<UpdateResult> {
    return this.repository.update(id, partialEntity);
  }

  async findOneEntity(options: FindOneOptions<T>): Promise<T | null> {
    return this.repository.findOne(options);
  }

  async findAllEntities(): Promise<T[]> {
    return this.repository.find();
  }

  async deleteEntity(id: string): Promise<DeleteResult> {
    return this.repository.delete(id);
  }

  async softDeleteEntity(id: string): Promise<DeleteResult> {
    return this.repository.softDelete(id);
  }
}
