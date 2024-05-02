import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent {
  @Input() movie?: Movie;

  constructor(private route: ActivatedRoute, private location: Location, private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.movieService.getMovie(id).subscribe(movie => this.movie = movie);
  }

  saveMovie(): void {
    if (this.movie) {
      this.movieService.updateMovie(this.movie).subscribe(() => this.goBack())
    }
  }

  deleteMovie(): void {
    if(this.movie) {
      this.movieService.deleteMovie(this.movie).subscribe(() => this.goBack())
    }
  }
  
  goBack() {
    this.location.back();
  }
}
