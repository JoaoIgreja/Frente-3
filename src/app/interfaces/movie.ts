// import { Critic } from "./critic";

export interface Movie {
    id: string;
    name: string;
    description: string;
    score: number;
    genre: string
    director: string
    // critics: Critic[];
}