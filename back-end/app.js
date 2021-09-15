const express = require('express')
const app = express()
const port = 3001

app.use(express.json());

app.get('/', (req, res) => {
  res.send({res: 'Hello World!'})
})

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
})

var TurmasRouter = require('./routes/turmas');

const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/gepeto';
const connect = mongoose.connect(url);

connect.then((db) =>{
  console.log("conected correctly to server");
}, (err) =>{ console.log(err); });
 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/turma', turmasRouter);

module.exports = app;
