import {ClientOptions, Transport} from '@nestjs/microservices';
import {join} from 'path';

export const serverOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:3000',
    package: 'rpc',
    protoPath: join(__dirname, '../proto/rpc.proto'),
  },
};
