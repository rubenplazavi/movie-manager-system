import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import {
  Repository,
  EntityTarget,
  SelectQueryBuilder,
  DataSource,
} from 'typeorm';

@Injectable()
export class TypeOrmQueryBuilder<T> {
  constructor(
    private readonly queryBuilder: SelectQueryBuilder<T>,
    private readonly alias: string,
  ) {}

  //Añadir select, where, joins, orderBy ......
}
