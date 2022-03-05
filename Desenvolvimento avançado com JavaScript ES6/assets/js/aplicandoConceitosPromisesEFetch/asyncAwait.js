// ES7 - Async / Await


// async transforma uma Function em uma Promise 
// Await aguarda uma outra promisse ser resolvida
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

const simpleFunc = async () => {
    const data = await asyncTimer();
    return data
};

simpleFunc()
.then(data => {
    console.log(data);
})

