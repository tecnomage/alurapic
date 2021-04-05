import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoService } from './../../photo/photo.service';
import { PhotoComment } from './../../photo/photo.comment';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'ap-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId: number;
  commentForm: FormGroup;

  comments$: Observable<PhotoComment[]>;
  
  constructor(
    private photoService : PhotoService,
    private formBuilder  : FormBuilder 
    ) { }

  ngOnInit() {
    this.comments$ = this.photoService.getComments(this.photoId);
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(100)]
    });

    this.photoService.getComments(this.photoId).subscribe(comment => console.log(comment));
  }


  save(){
    const comment = this.commentForm.get('comment').value as string;
    console.log(comment);
    // console.log(this.photoId);

    this.comments$ = this.photoService.
      addComments(this.photoId, comment).
      pipe(switchMap(() =>
        this.photoService.getComments(this.photoId)
      )).
      pipe(tap(() => {
        this.commentForm.reset();
        console.log('Comentario adicionado com sucesso !');
      }));
  }

}
