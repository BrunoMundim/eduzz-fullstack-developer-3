const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/assets/index.html'));
});

app.use('/', router);
app.use("/assets", express.static('./assets/'));
app.listen(process.env.port || 3000);


console.log('Server rodando');

// Para rodá-lo utilizamos o comando:
// node nomeDoArquivo (index.js)
// dentro do CMD