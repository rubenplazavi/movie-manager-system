import { ApiProperty } from "@nestjs/swagger";
import { userPropertiesSwagger } from "../config/swagger/properties/users-properties.swagger";
const {id, name, email } = userPropertiesSwagger;

export class CreateUserResponse {
    @ApiProperty(id)
	readonly id: string;

	@ApiProperty(name)
	readonly name: string;

	@ApiProperty(email)
	readonly email: string;
}