// Generic Types

// Geralmente se <T> quando se sabe o tipo que vai se definir para uma variável

function adicionaApendiceLista<T>(array: any[], valor: T) {
    return array.map(item => item + valor);
};

adicionaApendiceLista([1, 2, 3], 1);

interface IUsuario {
    id: string;
    email: string;
    cpf?: number; // o ? torna o dado opicional
};

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
};

function redirecione(usuario: IUsuario | IAdmin) {
    if('cargo' in usuario){
        // redirecionar para área de administração
    } else {
        // redirecionar para área do usuário
    }
};
