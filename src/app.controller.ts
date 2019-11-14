import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from "@nestjs/microservices";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

//  @Get()
  @GrpcMethod('A', 'B')
  getHello(): string {
    return this.appService.getHello();
  }
}
