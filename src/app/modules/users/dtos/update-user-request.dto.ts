import { PartialType } from "@nestjs/swagger";
import { CreateUserRequestDto } from "./create-user-request.dto";

export class UpdateUserRequestDto extends PartialType(CreateUserRequestDto) {
    //ToDo  poner campos que se quieran actualizar, el email parece que no se va a actualizar, solo password y nombre
  }
  