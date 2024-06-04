import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
import { Curator } from '../interfaces/curator';
import { tap } from "rxjs";
import { Critic } from "../interfaces/critic";

@Injectable({
  providedIn: 'root'
})

export class CuratorSerice {
  private curatorBaseUrl = 'http://localhost:3333';
  httpOptions = {headers : new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  userData: Curator = {id: undefined as unknown as string, username: '', email: '', password: ''};

  login({ email, password}: Curator): Observable<{user: string , token: string}> {
    const url = `${this.curatorBaseUrl}/user/login`;
    const body = {email, password};
    return this.http.post<any>(url, body, this.httpOptions).pipe(
      tap(response => {
        this.userData.id = response.user.id;
      }),
      catchError(this.handleError<{user: string, token: string}>('login'))
    );
  }

  register({username, email, password }: Curator): Observable<Curator> {
    const url = `${this.curatorBaseUrl}/user`;
    const body = {username, email, password};
    return this.http.post<any>(url, body, this.httpOptions).pipe(catchError(this.handleError<Curator>('register')));
  }

  updateUser({username, email }: Curator): Observable<Curator> {
    const url = `${this.curatorBaseUrl}/user/${this.userData.id}`;
    const body = {username, email};
    return this.http.put<any>(url, body, this.httpOptions).pipe(catchError(this.handleError<Curator>('update')));
  }

  showUser(): Observable<Curator> {
    const url = `${this.curatorBaseUrl}/user/${this.userData.id}`;
    return this.http.get<any>(url, this.httpOptions).pipe(catchError(this.handleError<Curator>('update')));
  }

  deleteUser(): Observable<void> {
    const url = `${this.curatorBaseUrl}/user/${this.userData.id}`;
    return this.http.delete<any>(url, this.httpOptions).pipe(catchError(this.handleError<void>('delete')));
  }

  listUser(): Observable<Array<Curator>> {
    const url = `${this.curatorBaseUrl}/user`;
    return this.http.get<any>(url, this.httpOptions).pipe(catchError(this.handleError<Array<Curator>>('list')));
  }

  createCritic({rating, review }: Critic): Observable<Critic> {
    const url = `${this.curatorBaseUrl}/critic`;
    const body = {rating, review};
    return this.http.post<any>(url, body, this.httpOptions).pipe(catchError(this.handleError<Critic>('critic')));
  }

  updateCritic({rating, review }: Critic): Observable<Critic> {
    const url = `${this.curatorBaseUrl}/critic/${this.userData.id}`;
    const body = {rating, review};
    return this.http.put<any>(url, body, this.httpOptions).pipe(catchError(this.handleError<Critic>('critic')));
  }

  deleteCritic(): Observable<void> {
    const url = `${this.curatorBaseUrl}/critic/${this.userData.id}`;
    return this.http.delete<any>(url, this.httpOptions).pipe(catchError(this.handleError<void>('critic')));
  }

  findCriticByUser({rating, review }: Critic): Observable<Critic> {
    const url = `${this.curatorBaseUrl}/critic/${this.userData.id}`;
    const body = {rating, review};
    return this.http.get<any>(url, this.httpOptions).pipe(catchError(this.handleError<Critic>('critic')));
  }

  findCriticByMovie(): Observable<Array<Critic>> {
    const url = `${this.curatorBaseUrl}/critic/:idmovie`;
    return this.http.get<any>(url, this.httpOptions).pipe(catchError(this.handleError<Array<Critic>>('critic')));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
