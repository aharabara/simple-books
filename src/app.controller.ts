import {Controller, Get} from '@nestjs/common';

@Controller()
export class AppController {

    @Get()
    index(): any {
        return {
            resources: {
                "authors" : {
                    "GET" : [
                        "/author/",
                        "/author/:id"
                    ],
                },
                "books" : {

                },
            }
        };
    }
}
