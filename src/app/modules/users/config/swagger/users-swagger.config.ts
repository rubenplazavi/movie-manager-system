import { HttpStatus } from "@nestjs/common";
import { CreateUserDto } from "../../dtos/create-user.dto";
import { CreateUserResponse } from "../../dtos/create-user-response.dto";

export const usersSwaggerConfig = {
    tag: 'Users',
    create:{
        operation: {
            summary: 'Create user',
			description: 'This endpoint creates a new user',
        },
        body: {
            type: CreateUserDto
        },
        response: {
			created: {
				status: HttpStatus.CREATED,
				description: 'Created',
				type: CreateUserResponse,
			},
			badRequest: {
				status: HttpStatus.BAD_REQUEST,
				description: 'Bad Request',
			},
            unauthorised: {
                status: HttpStatus.UNAUTHORIZED,
				description: 'User not authorised',
            }
        }
    }
}