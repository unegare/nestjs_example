import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { serverOptions } from './grpc.options'

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, serverOptions);
  await app.listen(() => {console.log('app started')});
}
bootstrap();
