import { HttpClient } from '@angular/common/http';

import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable, Injector } from "@angular/core";

import { UserService } from 'src/app/core/user/user.service';
import * as StackTrace from "stacktrace-js";
import { ServerLogService } from './server-log.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler { 

    constructor(private injector : Injector) {

    }

    handleError(error: any): void {
        
        console.log('entrou no error handler');

        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);
        const serverLogService = this.injector.get(ServerLogService);
        const httpService = this.injector.get(HttpClient);
        const url = location instanceof PathLocationStrategy
            ? location.path()
            : '';

        const message = error.message
            ? error.message :
            error.toString();

        StackTrace
            .fromError(error)
            .then(stackFrames => {
                const stackAsString = stackFrames
                    .map(sf => sf.toString())
                    .join('\n')
                  
                const messagem_de_erro = {
                    message,
                    url,
                    userName: userService.getUserName(),
                    stack: stackAsString
                };

                //console.log(messagem_de_erro);
                //Metodo para debugar
                serverLogService.log().subscribe( retorno => 
                    {
                        console.log('o retorno da chamada foi : ' + retorno),
                        err => {
                                         console.log(err);
                                        console.log('Fail to send error log to server');
                                     }
                    });

                //METODO ORIGINAL    
                //     serverLogService.log(messagem_de_erro
                //     ).subscribe(
                //         () => console.log('Error logged on server'),
                //         err => {
                //             console.log(err);
                //             console.log('Fail to send error log to server');
                //         }
                //     )
                // });
                    
                }
}