const { doesNotMatch } = require('assert');
const assert = require('assert');
const Math = require('../assets/js/testAutomation/math.js');
const expect = require('chai').expect;

let value = 0;

describe ( 'Math class', function() {
    // hooks
    this.beforeEach(function() {
        value = 0;
    }); // executa antes de cada teste
    //before, after, afterEach
    
    it('Sum two numbers Expect', function(done) {
        const math = new Math();
        this.timeout(3000); //Especifica o máximo timeout aceito.
        
        value = 5;
        math.sum(value, 5, (value) => {
            expect(value).to.equal(10)
            done(); //Permite teste assíncrono
        });
    });

    it('Multiply two numbers Expect', function(){
        const math = new Math();
        const obj = {
            name: 'Bruno Mundim'
        }

        expect(math.multiply(value, 5)).to.equal(0);
        expect(obj).to.have.property('name').equal('Bruno Mundim');
    });

    // it.only para executar somente um teste
    // it.skip para pular um teste
});

//npm run test
//Comando para rodar o teste 