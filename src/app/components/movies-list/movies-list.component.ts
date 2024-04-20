import { Component } from '@angular/core';
import { MOVIES } from 'src/app/utils/mock-movies';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent {
  movies = MOVIES;
}
