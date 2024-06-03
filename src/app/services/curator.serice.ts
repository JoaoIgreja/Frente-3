import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
import { Curator } from '../interfaces/curator';

@Injectable({
  providedIn: 'root'
})

export class CuratorSerice {
  private curatorBaseUrl = 'http://localhost:3333';
  httpOptions = {headers : new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  login({email, password}: Curator): Observable<{user: string , token: string}> {
    const url = `${this.curatorBaseUrl}/user/login`;
    const body = {email, password};
    return this.http.post<any>(url, body, this.httpOptions).pipe(catchError(this.handleError<{user: string, token: string}>('login')));
  }

  register({username, email, password }: Curator): Observable<Curator> {
    const url = `${this.curatorBaseUrl}/user`;
    const body = {username, email, password};
    return this.http.post<any>(url, body, this.httpOptions).pipe(catchError(this.handleError<Curator>('register')));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
