import { PhotoComment } from './photo.comment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from "./photo";
import { catchError, map } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
        return this.http
            .get<Photo[]>(API + '/' + userName + '/photos');       
    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams()
            .append('page', page.toString());

        return this.http
            .get<Photo[]>(API + '/' + userName + '/photos', { params });       
    }    

    upload(description: string, allowComments: boolean, file: File){
        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true' : 'false');
        formData.append('imageFile', file);
        return this.http.post(API + '/photos/upload',formData);
    }

    

    findById(photoId: number){

        return this.http.get<Photo>(API + '/photos/' + photoId)

    }

    like(photoId: number) {
        
        return this.http.post(
            API + '/photos/' + photoId +  '/like', {}, {observe: 'response'}
        ).
        pipe(map(res => true)).
        pipe(catchError(err => {
            return err.status == '304' ? of(false) : throwError(err);
        }));

    }

    getComments(photoId : number){
        
        return this.http.get<PhotoComment[]>(API + '/photos/'
        + photoId +'/comments')

    }

    addComments(photoId : number, commentText: string){
        console.log('entrou do addComments')
        //console.log(photoId +' '+ commentText)
         return this.http.post(API + '/photos/'+ photoId +'/comments', {commentText})

    }

    removePhoto(photoId: number) {
        return this.http.delete(API + '/photos/' + photoId);
    }

}
