import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MovieDetailComponent,
    MoviesListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
