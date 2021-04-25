import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ServerLog } from './server-log';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Console } from 'console';


//const API = environment.serverLog;
const API = 'http://localhost:7000/infra';

@Injectable({
  providedIn: 'root'
})
export class ServerLogService {

  constructor(private httpClient: HttpClient) { }

   log() {
       console.log('entrou no log')
  //   //console.log(API + '/infra/log/')
  //   console.log(API);
  //   //return this.httpClient.post(API + 'infra/log', serverLog)
    return this.httpClient.get('http://localhost:7000/infra')
     }

     //METODO ORIGINAL
//      log(serverLog: ServerLog) {
//       console.log('entrou no log')
//  //   //console.log(API + '/infra/log/')
//  //   console.log(API);
//  //   //return this.httpClient.post(API + 'infra/log', serverLog)

//     }
 

}
