import { Router } from '@angular/router';
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { environment } from './../../../environments/environment.prod';
import { UserService } from 'src/app/core/user/user.service';
import * as StackTrace from "stacktrace-js";
import { ServerLogService } from './server-log.service';


@Injectable()
export class GlobalErrorHandler implements ErrorHandler { 

    constructor(private injector : Injector) {

    }
    

    handleError(error: any): void {
        
        console.log('entrou no handlerError');

        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);
        const serverLogService = this.injector.get(ServerLogService);
        const router = this.injector.get(Router);

        const url = location instanceof PathLocationStrategy
            ? location.path()
            : '';

        const message = error.message
            ? error.message :
            error.toString();
        //console.log("esta em producao " + environment.production);
        //if(!environment.production) 
        
        router.navigate(['/error']);
           
        StackTrace
            .fromError(error)
            .then(stackFrames => {
                const stackAsString = stackFrames
                    .map(sf => sf.toString())
                    .join('\n');
                  
                const messagem_de_erro = {
                    message,
                    url,
                    userName: userService.getUserName(),
                    stack: stackAsString
                };

                //METODO ORIGINAL    
                    serverLogService.log(messagem_de_erro
                    ).subscribe(
                        () => console.log('Error logged on server')
                        ,
                        err => {
                            console.log(err);
                            console.log('Fail to send error log to server');
                        }
                    )
                });
                    



            }
}
