import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesBaseUrl = "http://localhost:3333/movies";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesBaseUrl).pipe(
      catchError(this.handleError<Movie[]>("getMovies", []))
    );
  }

  getMovie(id: string): Observable<Movie> {
    const url = `${this.moviesBaseUrl}/{$id}`;
    return this.http.get<Movie>(url).pipe(
      catchError(this.handleError<Movie>(`getMovie id=${id}`))
    );
  }

  updateMovie(movie: Movie): Observable<any> {
    const url = `${this.moviesBaseUrl}/${movie.id}`
    return this.http.put(url, movie, this.httpOptions).pipe(
      catchError(this.handleError<any>(`updateMovie id=${movie.id}`))
    )
  }

  deleteMovie(movie: Movie): Observable<any> {
    const url = `${this.moviesBaseUrl}/${movie.id}`
    return this.http.delete(url, this.httpOptions).pipe(
      catchError(this.handleError<any>(`deleteMovie id=${movie.id}`))
    )
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
