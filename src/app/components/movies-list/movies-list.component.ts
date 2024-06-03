import { Component } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';
import { MOVIES } from 'src/app/utils/mock-movies';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent {
  movies: Movie[] = MOVIES; // Utiliza as instâncias de filmes mockados

  constructor(private movieService: MovieService) { };

  // Método para buscar os filmes -em comentários para teste-
  /*ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => this.movies = movies)
  }*/
}
