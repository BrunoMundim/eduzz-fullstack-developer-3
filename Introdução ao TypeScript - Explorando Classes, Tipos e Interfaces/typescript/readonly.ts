interface ICachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

/* const meuCachorro: Cachorro = {
    nome: 'Bob',
    idade: 8,
} */

type CachorroSomenteLeitura = {
    +readonly [K in keyof ICachorro]-?: ICachorro[K];
    // readonly = somente leitura
    // K é um valor genérico de chave
    // usamos o + pra facilitar a leitura, estou adicionando o readonly
    // -? Remove os opcionais (parqueFavorito)
}

class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;

    constructor(nome: string, idade: number, parqueFavorito: string){
        this.nome = nome;
        this.idade = idade;
        this.parqueFavorito = parqueFavorito;
    }
}

const cao = new MeuCachorro('Bob', 14, 'Parque do Sabiá');