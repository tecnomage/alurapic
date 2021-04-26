import { RouterModule } from '@angular/router';
import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalErrorComponent } from './global-error/global-error/global-error.component';
import { GlobalErrorHandler } from './global-handler-error/global-handler-error';



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NotFoundComponent, 
    GlobalErrorComponent    
    ],
  providers: [
    {
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
    }
  ]
})
export class ErrorsModule { }
