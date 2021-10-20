const express = require('express');
const Professores = require('./models/professores')
const router = express.Router();

router.post('/', (req, res, next) => {
  Professores.create(req.body)
    .then((professor) => {
      console.log('Professor criado ', professor);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(professor);
    }, (err) => next(err))
      .catch((err) => next(err));
});

router.get('/', async (req, res) => {
  try {
    const professores = await Professores.find();
    res.status(200).json(professores);
  }
  catch(err) {
    res.status(500).send(err);
  }
});
router.delete('/:id', async (req, res, next) => {
  Professores.findByIdAndRemove(req.params.id)
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err));
})

router.put('/:id', (req, res) => {
  if(req.body && req.params.id) {
    Professores.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, { new: true })
      .then(response => {
        res.status(200).json({msg: 'Professor alterado com sucesso', response});
      })
      .catch(err => res.status(400).json({msg: 'Id não encontrado', erro: err}))
 }
 else {
     res.status(400).send('Requisição mal-formulada');
  }
});

module.exports = router;