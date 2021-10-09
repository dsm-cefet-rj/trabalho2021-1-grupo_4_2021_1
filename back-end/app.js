require('dotenv').config();
const cors = require('cors');
const express = require('express')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express()
const port = process.env.PORT || 3001;

const authenticate = require('./authenticate');
const exames = require('./exam');
const turmas = require('./turma')
const professores = require('./professores.js');
const alunos = require('./alunos.js');
const escola = require('./escola.js')
const respostas = require('./respostas');
const Alunos = require('./models/alunos');
const Professores = require('./models/professores');
const Turmas = require('./models/turmas');
const { verifyJWT } = require('./auth.service');

const connect = mongoose.connect(process.env.DB_URL);

connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });

app.use(express.json());
app.use(cors());
app.use(cookieParser())

/* const auth = async (req, res, next) => {

  if(!req.headers.cookie['user']) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      console.error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');
      res.status(401).send('You are not authenticated!')
      next(new Error());
      return;
    }
  
    const auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    const user = auth[0];
    const pass = auth[1];
  
    let usuario;
    switch(user.split('@')[1]) {
      case 'alunos.com':
        usuario = await Alunos.findOne({'username': user});
        break;
      case 'professores.com':
        usuario = await Professores.findOne({'username': user});
        break;
      case 'turmas.com':
        usuario = await Turmas.findOne({'username': user});
        break;
    }
  
    if (usuario && usuario.username == user && usuario.password == pass) {
      res.cookie('user', user);
      next(); // authorized
    } 
    else {
      console.error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');      
      res.status(401).send('You are not authenticated!')
      next(new Error());
    }
  }
  else {
    console.error('You are not authenticated!');
    res.setHeader('WWW-Authenticate', 'Basic');      
    res.status(401).send('You are not authenticated!')
    next(new Error());
  }

} */


app.use('/', authenticate);
app.use('/exames', verifyJWT, exames);
app.use('/turmas', verifyJWT, turmas);
app.use('/professores', verifyJWT, professores);
app.use('/alunos', verifyJWT, alunos)
// essa entidade não vai ser implementada por enquanto
app.use('/escola', verifyJWT, escola);
app.use('/questoes', verifyJWT, escola);
app.use('/respostas', verifyJWT, respostas);

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
}) 