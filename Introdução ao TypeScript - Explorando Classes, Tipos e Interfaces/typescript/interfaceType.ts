function soma(a: number, b: number) {
    console.log(a + b);
}

soma(1, 2);

// Interfaces: Usado para criar contratos

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
    executarRugido(alturaEmDecibeis: number): void;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino

const elefante: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    domestico: false,
}

const leao: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    domestico: false,
    visaoNoturna: false,
    executarRugido: (alturaEmDecibeis) => ('${alturaEmDecibeis}dB'),
}

const cachorro: IDomestico = {
    nome: 'Cachorro',
    tipo: 'terrestre',
    domestico: true,
    porte: 'medio',
    visaoNoturna: true,
}

leao.executarRugido(114);

// Types: Usado para juntar várias interfaces ou definir que uma variável pode ser uma interface

type IAnimalType= {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
}