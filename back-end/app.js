require('dotenv').config();
const cors = require('cors');
const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = process.env.PORT || 3001;

const exames = require('./exam');
const turmas = require('./turma')
const professores = require('./professores');
const alunos = require('./alunos');
const escola = require('./escola')
const respostas = require('./respostas')

const connect = mongoose.connect(process.env.DB_URL);

connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send({
    routes: [
      '/exames',
      '/turmas',
      '/professores',
      '/alunos',
      '/escola',
      '/respostas'
    ]
  });
})

app.use('/exames', exames);
app.use('/turmas', turmas);
app.use('/professores', professores);
app.use('/alunos', alunos)
app.use('/escola', escola);
app.use('/questoes', escola);
app.use('/respostas', respostas);

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
}) 