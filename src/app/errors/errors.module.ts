import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalErrorHandler } from './global-handler-error/global-handler-error';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotFoundComponent],
  providers: [
    {
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
    }
  ]
})
export class ErrorsModule { }
