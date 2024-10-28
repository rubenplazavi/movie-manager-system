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

/**
 * Método Abstracto para implermentar un patron repositorio que tiende a desacoplar el acceso a datos, pudiendo ser fácilmente escalable
 *  y fácil de intercambiar y sustituir por otro tipo de repositorio.
 * Tiene una propieda (repositorio) que por medio del método abstracto, que tienen que implementar todas las subclases, va a sacar el tipo de entidad
 * la cual va a interactuar con la base de datos.
 * Esta entidad (repositorio) va a ser inyectado como dependencia en el constructor, acorde a los patrones de inyección de depencias para 
 * minimizar el acoplamiento
 */
export abstract class TypeOrmRepository<T> {
  private readonly repository: Repository<T>;

  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.repository = this.dataSource.getRepository(this.entitySchema());
  }

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
