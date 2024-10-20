import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Home')
@Controller('/')
export class AppController {
  @Get('/')
  @ApiResponse({
    status: HttpStatus.OK,
    //headers: swagger.response.headers.global,
    type: Object,
  })
  getHome(): any {
    //return { welcome: config.project.name };
  }
}