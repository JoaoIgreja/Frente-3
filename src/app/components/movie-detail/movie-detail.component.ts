import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { MOVIES } from 'src/app/utils/mock-movies';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent {
  @Input() movie?: Movie;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // Método estático por enquanto, passar para um service depois
    this.movie = MOVIES.find((movie: Movie) => movie.id === id);
  }

  goBack() {
    this.location.back();
  }
}
