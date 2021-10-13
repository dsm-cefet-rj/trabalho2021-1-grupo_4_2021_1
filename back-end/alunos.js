const express = require('express');
const Alunos = require('./models/alunos')
const router = express.Router();
const cors = require('./cors');

router.route('/')
.post(cors.corsWithOptions, (req, res, next) => {
  Alunos.create(req.body)
    .then((aluno) => {
      console.log('Aluno criado ', aluno);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(aluno);
    }, (err) => next(err))
      .catch((err) => next(err));
})

.get(cors.corsWithOptions, async (req, res) => {
  try {
    const alunos = await Alunos.find();
    res.status(200).json(alunos);
  }
  catch(err) {
    res.status(500).send(err);
  }
});

router.route('/:id')
.delete(cors.corsWithOptions, async (req, res, next) => {
  Alunos.findByIdAndRemove(req.params.id)
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err));
})

.put(cors.corsWithOptions, (req, res) => {
  if(req.body && req.params.id) {
    Alunos.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, { new: true })
      .then(res => {
        res.status(200).json({msg: 'Aluno alterado com sucesso', res});
      })
      .catch(err => res.status(400).json({msg: 'Id não encontrado', erro: err}))
 }
 else {
     res.status(400).send('Requisição mal-formulada');
  }
});

module.exports = router;