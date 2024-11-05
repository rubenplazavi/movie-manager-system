import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomInternalServerErrorException extends HttpException {
  constructor(message: string, details: string) {
    super(
      {
        message,
        details,
        error: 'Internal Server Error',
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
