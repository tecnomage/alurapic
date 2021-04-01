import { FormGroup, FormBuilder } from '@angular/forms';
import { PhotoComment } from './../photo/photo.comment';
import { Observable } from 'rxjs';
import { PhotoService } from "./../photo/photo.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Photo } from '../photo/photo';


@Component({
  templateUrl: "./photo-details.component.html",
  styleUrls: ["./photo-details.component.css"],
})
export class PhotoDetailsComponent implements OnInit {
  
  photo$: Observable<Photo>;
  photoId: number;
  //detaisForm: FormGroup;
  
  //TODO veriicar se FormGroup fica aqui
  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    //private formBuilder:  FormBuilder
  ) {}

  ngOnInit(): void {
  
    this.photoId= this.route.snapshot.params.photoId;
    
    this.photo$ = this.photoService.findById(this.photoId);
    
    
  }
}
