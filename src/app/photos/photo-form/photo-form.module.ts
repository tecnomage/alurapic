import { ImmediateClickModule } from './../../shared/directives/immediate-click/immediate-click.module';
import { ImmediateClickDirective } from './../../shared/directives/immediate-click/immediate-click.directive';
import { PhotoModule } from './../photo/photo.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';


@NgModule({
    declarations: [PhotoFormComponent],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        FormsModule,
        RouterModule,
        PhotoModule,
        ImmediateClickModule
     ]
})
export class PhotoFormModule { }