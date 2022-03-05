// EventEmitter necessário NodeJS

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit( 'User logged', data);
        }, 2000);
    }
}

const users = new Users();

users.on('User logged', data => {
    console.log(data);
});
// on faz todos os pedidos
// once executa apenas o primeiro

Users.userLogged({ user: 'Bruno Mundim'} );
Users.userLogged({ user: 'Marco Antonio'} );