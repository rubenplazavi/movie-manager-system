import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { usersConfig } from '../config/users.config';
import { Roles } from "../../shared/enums/roles.enum";
import { TimestampEntity } from "../../shared/persistence/typeorm-timestamp.entity";

@Entity(usersConfig.entity.name)
export class UserEntity extends TimestampEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role: Roles;

    constructor(id: string, name: string, email: string, password: string, role: Roles){
        super();
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    static create(id: string, name: string, email: string, password: string, role: Roles){
        return new UserEntity(id, name, email, password, role);
    }
}