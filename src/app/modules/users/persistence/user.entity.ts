import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { usersConfig } from '../config/users.config';

@Entity(usersConfig.entity.name)
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}