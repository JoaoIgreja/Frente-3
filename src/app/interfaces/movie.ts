import { Critic } from "./critic";

export interface Movie {
    id: string;
    name: string;
    genre: string
    director: string
    release_date: string;
    description: string;
    duration: number; // Duração pode ser em minutos e depois formatamos, mas é apenas uma ideia
    score: number;
    critics: Critic[];
    // Talvez adicionar um campo que direcione para uma imagem estática da capa do filme
    // banner: string
}
