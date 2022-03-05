const { doesNotMatch } = require('assert');
const assert = require('assert');
const Math = require('../assets/js/testAutomation/math.js');

let value = 0;

describe ( 'Math class', function() {
    // hooks
    this.beforeEach(function() {
        value = 0;
    }); // executa antes de cada teste
    //before, after, afterEach
    
    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000); //Especifica o máximo timeout aceito.
        
        value = 5;
        math.sum(value, 5, (value) => {
            assert.equal(value, 10);
            done(); //Permite teste assíncrono
        });
    });

    it('Multiply two numbers', function(){
        const math = new Math();

        assert.equal(math.multiply(value, 5), 0);
    });

    // it.only para executar somente um teste
    // it.skip para pular um teste
});

//npm run test
//Comando para rodar o teste 