import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
      name: 'name',
      description: 'user name',
      required: true,
      type: String,
    })
    name: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
      name: 'email',
      description: 'users email',
      required: true,
      type: String,
    })
    email: string;
  
    
    @IsStrongPassword()
    @ApiProperty({
      name: 'password',
      description: 'users password',
      required: true,
      type: String,
    })
    password: string;
  }
  