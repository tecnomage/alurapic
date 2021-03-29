import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetaislComponent } from './photo-detaisl/photo-detaisl.component';
import { PhotoDetailsComponent } from './photo-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PhotoDetaislComponent, PhotoDetailsComponent]
})
export class PhotoDetailsModule { }
