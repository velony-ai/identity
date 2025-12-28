import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';

import { AppModule } from './app.module';
import { TypedConfigService } from './config/typed-config.service';
import { BadValidationRequest } from './shared/infrastructure/exceptions/bad-validation-error.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(TypedConfigService);

  app.enableCors({
    origin: configService.get('FRONTEND_URL'),
    credentials: configService.get('NODE_ENV') === 'production',
  });

  app.use(cookieParser());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      stopAtFirstError: false,
      exceptionFactory: (errors) => new BadValidationRequest(errors),
    }),
  );

  app.setGlobalPrefix('api');

  await app.listen(configService.get('SERVICE_PORT'));
}

bootstrap();
