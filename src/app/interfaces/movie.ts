import { Critic } from "./critic";

export interface Movie {
    id: string;
    name: string;
    genre: string
    director: string
    release_date: string;
    description: string;
    duration: number;
    score: number;
    critics: Critic[];
}
