import {NestFactory, Reflector} from '@nestjs/core';
import {AppModule} from './app.module';
import "reflect-metadata";
import {ClassSerializerInterceptor, ValidationPipe} from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            forbidNonWhitelisted: true,
            forbidUnknownValues: true,
        }),
    );
    app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))
    await app.listen(3000);
}

bootstrap();
