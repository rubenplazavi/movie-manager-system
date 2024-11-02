import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { EnvConfiguration } from "../environment/env.config";
import * as dotenv from 'dotenv'; dotenv.config();

const {dbname, dbhost, dbport, dbusername, dbpassword } = EnvConfiguration();

export const typeOrmConfig: TypeOrmModuleOptions = {
	type: 'postgres',
    database: dbname,
	host: dbhost,
	port: +dbport,
	username: dbusername,
	password: dbpassword,
	// ssl: postgres.database.ssl,
	autoLoadEntities: true,
	extra: {
		charset: 'utf8mb4_unicode_ci',
	},
	// logging: typeorm.logging,
	synchronize: true,
};