
const express = require('express');
const router = express.Router();
const Turmas = require('./models/turmas');
const cors = require('./cors');

router.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, async (req, res, next) => {

    let err;
    res.setHeader('Content-type', 'application/json');
    try{
        const turmasBanco = await Turmas.find({});
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(turmasBanco);
    }catch(err){
        err = {};
        res.statusCode = 404;
        res.json(err);
    }
})
.post(cors.corsWithOptions, (req, res, next) => {

    Turmas.create(req.body)
    .then((turma) => {
        console.log('Turma criado ', turma);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(turma);
    }, (err) => next(err))
    .catch((err) => next(err));

    router.route('/:id')

  Turmas.findById(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));


})
.delete(cors.corsWithOptions, (req, res, next) => {
    Turmas.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp.id);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put(cors.corsWithOptions, (req, res, next) => {
    Turmas.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true })
  .then((turma) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(turma);
  }, (err) => next(err))
  .catch((err) => next(err));
})

/* let turmas = [
{
    "id": 1,
    "username": "turmaDeProgramação@turma.com",
    "password": "123456",
    "tipoconta": "turmas",
    "turma": "1",
    "dataInicio": "06/03",
    "dataFim": "27/06",
    "professor": "diogo",
    "alunos": ["claudio", "eduardo", "leonardo", "matheus"]
},
{
    "id": 2,
    "username": "turmadecalculo@turma.com",
    "password": "123calculo",
    "tipoconta": "turmas",
    "turma": "2",
    "dataInicio": "29/02",
    "dataFim": "15/06",
    "professor": "calculator",
    "alunos": ["bruno", "marcelo", "oscar", "brito" ]
}
]
 */

 /* router.post('/', (req, res) => {
    if (req.body) {
        let id = turmas.push({ ...req.body, id: turmas.length + 1 });
        res.status(201).json({ id, msg: 'Turma criada com sucesso!' });
    }
    else {
        res.status(400).send('Requisição mal-formulada');
    }
}); */

/* router.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(turmas);
}); */ 

/* router.put('/:id', (req, res) => {
   if(req.body && req.params.id) {
       const tIndex = turmas.findIndex(turmas => turmas.id == req.params.id);
       if(tIndex) {
           turmas.splice(tIndex, 1, req.body);
           res.status(200).send('Turma alterada com sucesso');
       }
       else {
           res.status(400).send('Id não encontrado');
       }
   }
   else {
       res.status(400).send('Requisição mal-formulada');
    }
}); */

/* router.delete('/:id', (req, res) => {
    const {id}= req.params;
    const deleted = turmas.filter(turmas => turmas.id ===  id);
    if(deleted){
      turmas = turmas.filter(turmas => turmas.id != id);
      res.status(200).json({message: "Turma apagada!"})
    }
    else{
      res.status(404).json({message: "Requisição mal-formulada"})
    }
  }) */

module.exports = router;