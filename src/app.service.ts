import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {str: String} {
    return {str: 'Hello World!'};
  }
}
