interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

// Usamos Omit para omitir um dado

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {
}

const brasileiro: Brasileiro = {
    nome: 'Bruno',
    idade: 21,
}