import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Post } from './post';
import { Observable, throwError } from 'rxjs';
import { User } from './user';
import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class PostService {
public param = "posts";
public url = "https://jsonplaceholder.typicode.com/" + this.param;
public loginURL = "http://192.168.44.31:80/acmsapi/api/usersetup/verifyuser";
constructor(private http: HttpClient) {

 }

 public getPosts(): Observable<Post[]>{
   return this.http.get<Post[]>(this.url)
 }


 public loginUser(userParam: User): Observable<User> {

  return this.http.post(this.loginURL, userParam, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  })
    .pipe(
      //catchError(this.handleError())
    );
}







private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};

}
