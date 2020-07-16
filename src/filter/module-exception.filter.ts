import {ArgumentsHost, Catch, ExceptionFilter, HttpStatus} from '@nestjs/common';
import {Request, Response} from 'express';
import {ModuleException} from "../books/application/exception/module.exception";

@Catch(ModuleException)
export class ModuleExceptionFilter implements ExceptionFilter {
    catch(exception: ModuleException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.message;

        response
            .status(HttpStatus.BAD_REQUEST)
            .json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
    }
}