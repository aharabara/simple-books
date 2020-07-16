import {NestFactory, Reflector} from '@nestjs/core';
import {AppModule} from './app.module';
import "reflect-metadata";
import {ClassSerializerInterceptor, ValidationPipe} from '@nestjs/common';
import {ModuleExceptionFilter} from "./filter/module-exception.filter";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({ /* @fixme fails when pathc is used, because default validation group is called.*/
            transform: true,
            forbidNonWhitelisted: true,
            forbidUnknownValues: true,
        }),
    );
    app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))
    app.useGlobalFilters(new ModuleExceptionFilter())
    await app.listen(3000);
}

bootstrap();
