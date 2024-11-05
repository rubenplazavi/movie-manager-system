import { HttpStatus } from "@nestjs/common";
import { CreateUserRequestDto } from "../../dtos/create-user-request.dto";
import { CreatedUserResponse } from "../../dtos/create-user-response.dto";

export const usersSwaggerConfig = {
    tag: 'Users',
    create:{
        operation: {
            summary: 'Create user',
			description: 'This endpoint creates a new user',
        },
        body: {
            type: CreateUserRequestDto
        },
        response: {
			created: {
				status: HttpStatus.CREATED,
				description: 'Created',
				type: CreatedUserResponse,
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