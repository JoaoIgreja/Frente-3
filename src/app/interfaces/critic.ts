import { Curator } from "./curator";

export interface Critic {
    id: string;
    commentary: string;
    published_date: string;

    // Apenas curadores escrevem críticas? Se não, iríamos precisar de uma interface para
    // usuários comuns
    author: Curator
}
