import { Movie } from "../interfaces/movie";

export const MOVIES: Movie[] = [
  {
    id: "1",
    name: "Inception",
    genre: "Sci-Fi",
    director: "Christopher Nolan",
    release_date: "2010-07-16",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    duration: 148,
    score: 8.8,
    critics: []
  },
  {
    id: "2",
    name: "The Shawshank Redemption",
    genre: "Drama",
    director: "Frank Darabont",
    release_date: "1994-09-22",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    duration: 142,
    score: 9.3,
    critics: []
  }
]
