import { Critic } from "./critic";

export interface Movie {
    id: string;
    title: string;
    genre: string;
    release_date: string;
    // Duração pode ser em minutos e depois formatamos, mas é apenas uma ideia
    duration: number;
    // Talvez adicionar um campo que direcione para uma imagem estática da capa do filme
    // banner: string

    critics: Critic[];
}
