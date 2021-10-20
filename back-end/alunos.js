const express = require('express');
const Alunos = require('./models/alunos')
const router = express.Router();

router.post('/', (req, res, next) => {
  Alunos.create(req.body)
    .then((aluno) => {
      console.log('Aluno criado ', aluno);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(aluno);
    }, (err) => next(err))
      .catch((err) => next(err));
});

router.get('/', async (req, res) => {
  try {
    const alunos = await Alunos.find();
    res.status(200).json(alunos);
  }
  catch(err) {
    res.status(500).send(err);
  }
});
router.delete('/:id', async (req, res, next) => {
  Alunos.findByIdAndRemove(req.params.id)
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err));
})

router.put('/:id', (req, res) => {
  if(req.body && req.params.id) {
    Alunos.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, { new: true })
      .then(response => {
        res.status(200).json({msg: 'Aluno alterado com sucesso', response});
      })
      .catch(err => res.status(400).json({msg: 'Id não encontrado', erro: err}))
 }
 else {
     res.status(400).send('Requisição mal-formulada');
  }
});

module.exports = router;