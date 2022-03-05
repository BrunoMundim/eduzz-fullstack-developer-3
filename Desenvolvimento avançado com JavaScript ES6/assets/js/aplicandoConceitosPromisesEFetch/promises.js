// Promises

const doSomethingPromise = () => new Promise((resolve, reject)=>{
    //  throw new Error('Something went wrong');
        setTimeout(function(){
            //faz alguma coisa
            resolve('First data');
        }, 1000);
    });
    
    const doOtherThingPromise = () => new Promise((resolve, reject) => {
        setTimeout(function(){
            //faz alguma coisa
            resolve('Second data');
        }, 2000);
    });
    
    /* 
    doSomethingPromise()
        .then(data => console.log(data.split('')))
        .catch(error => console.log(error)); 
    */
    
    doSomethingPromise()
        .then(data => {
            console.log(data.split(''));
            return doOtherThingPromise();
        })
        .then(data2 => console.log(data2.split('')))
        .catch(error => console.log('Ops', error));
    
    Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
        console.log(data, 'All');
    }); //Promise.all executa todas as Promises ao mesmo tempo.
    
    Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
        console.log('Race:', data);
    }); //Promise.race executa a Promise que finalizar primeiro.
    
    
    
    
    // Callbacks
    
    function doSomething(callback) {
        setTimeout(function(){
            //faz alguma coisa
            callback('First data');
        }, 1000);
    }
    
    function doOtherThing(callback) {
        setTimeout(function(){
            //faz outra coisa
            callback('Second data');
        }, 1000);
    }
    
    function doAll(){
        try{
        doSomething(function(data){
            var processedData = data.split('');
    
            try{
                doOtherThing(function(data2){
                    var processedData2 = data2.split('');
        
                    try{
                        setTimeout(function(){
                            console.log(processedData, processedData2);
                        }, 1000)
                    } catch(err){
                        //handle error
                    }
                })
            } catch(err){
                //handle error
            }        
        })
        } catch(err){
            // handle error
        }
    }
    
    // doAll();