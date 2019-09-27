import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
    error = new Subject<string>();
    constructor(private http: HttpClient) { }
    onCreatePost(postData: Post) {
        return this.http.post<{ name: string }>(
        // return this.http.post(
            'https://angular-practice-01.firebaseio.com/posts.json',
            postData,
            {
                // observe: 'body' // body is default and it extracts the result from the response.
                observe: 'response', // gives the whole response objects including metadata. statusCode, statusText etc.
                // responseType: 'text'  // blob if response is a file.
            }
        ).subscribe(
            response => {
                // console.log(response);
            },
            error => {
                this.error.next(error.message);
            });
    }

    // .pipe(map((response: { [s: string]: Post }) => {
    onFetchPosts() {
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty');
        searchParams = searchParams.append('custom', 'params');
        return this.http
            .get<{ [s: string]: Post }>(
                'https://angular-practice-01.firebaseio.com/posts.json',
                {
                    headers: new HttpHeaders({
                        'custom-header': 'abdus abcd'
                    }),
                    // params: new HttpParams().set('print', 'pretty')  // for single param
                    params: searchParams,  // for multipe params
                    responseType: 'json'
                }
            )
            .pipe(
                map(response => {
                    const postArray: Post[] = [];
                    for (const key in response) {
                        if (response.hasOwnProperty(key)) {
                            postArray.push({ ...response[key], id: key });
                        }
                    }
                    return postArray;
                }), catchError(errorRes => {
                    // can doa any async task on event of error or send to analytics
                    // or can call next on a Subject.
                    return throwError(errorRes);
                })
            );
    }

    onClearPosts() {
        return this.http.delete(
            'https://angular-practice-01.firebaseio.com/posts.json',
            {
                observe: 'events',
                responseType: 'json'
            }
        )
            .pipe(
                tap(
                    (response) => {
                        // console.log(response);
                        if (response.type === HttpEventType.Sent) {
                            // console.log('request send succesfully..');
                        }
                        if (response.type === HttpEventType.Response) {
                            // console.log('recieved response succesfully..');
                            // console.log(response.body);
                        }
                    }
                )
            );
    }
}
