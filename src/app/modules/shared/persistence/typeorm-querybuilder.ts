import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { SelectQueryBuilder, FindOptionsWhere, FindOneOptions } from 'typeorm';
import { SortOrder } from '../types/sort-order.type';
import { relative } from 'path';

// @Injectable()
export class TypeOrmQueryBuilder<T> {
  constructor(
    private readonly _queryBuilder: SelectQueryBuilder<T>,
    private readonly alias: string,
  ) {}
  //Añadir select, where, joins, orderBy ......

  select(columns: Array<string>): void {
    if (!columns) {
      this._queryBuilder.addSelect('*');
    }
    const columnsFromTable = columns.map((column) => {
      if (!column.includes('.') && this.alias !== column) {
        return `${this.alias}.${column}`;
      }
      return column;
    });
    this._queryBuilder.addSelect(columnsFromTable);
  }

  where(where: FindOptionsWhere<T> | FindOneOptions<T>): void {
    this._queryBuilder.where(where);
  }

  orderByColumn(column: string, sortOrder: SortOrder): void {
    this._queryBuilder.addOrderBy(`${this.alias}.${column}`, sortOrder);
  }

  addLeftjoinAndSelect(relations: Array<string>) {
    relations.map((relation) =>
      this._queryBuilder.leftJoinAndSelect(
        `${this.alias}.${relation}`,
        relation,
      ),
    );
  }

  leftjoinAndSelectWithAlias(alias, relation) {
    this._queryBuilder.leftJoinAndSelect(`${alias}.${relation}`, relation);
  }
}
