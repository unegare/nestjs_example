import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from "@nestjs/microservices";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

//  @Get()
  @GrpcMethod('Rpc', 'MethodName')
  async getHello(): Promise<{str: String}> {
    return this.appService.getHello();
  }
}
