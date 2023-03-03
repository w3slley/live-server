//create basic express server
const express = require('express');
const app = express();
const port = 3000;
const connectLiveReload = require("connect-livereload");
const rootFolder = 'projeto/'; //mudar para o nome da pasta do projeto

app.use(connectLiveReload());
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/' + rootFolder + 'index.html');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));