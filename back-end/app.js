const cors = require('cors');
const express = require('express')
const app = express()
const port = 3001
const exames = require('./exam');
const turmas = require('./turma')
const professores = require('./professores');
const alunos = require('./alunos');
const escola = require('./escola')

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send({res: 'Hello World!'})
})

app.use('/exames', exames);
app.use('/turmas', turmas);
app.use('/professores', professores);
app.use('/alunos', alunos)
app.use('/escola', escola);

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
}) 