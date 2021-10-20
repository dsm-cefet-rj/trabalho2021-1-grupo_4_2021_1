const express = require('express');
const Respostas = require('./models/respostas')
const router = express.Router();

router.post('/', (req, res, next) => {
    Respostas.create(req.body)
      .then((resposta) => {
        console.log('Resposta da questão adicionada com sucesso ', resposta);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resposta);
      }, (err) => next(err))
        .catch((err) => next(err));
  });

router.get('/', async (req, res) => {
    try {
      const respostas = await Respostas.find();
      res.status(200).json(respostas);
    }
    catch(err) {
      res.status(500).send(err);
    }
  });
  router.delete('/:id', async (req, res, next) => {
    Respostas.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
  })


router.put('/:id', (req, res) => {
    if(req.body && req.params.id) {
      Respostas.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, { new: true })
        .then(response => {
          res.status(200).json({msg: 'Resposta da questão alterada com sucesso', response});
        })
        .catch(err => res.status(400).json({msg: 'Id não encontrado', erro: err}))
   }
   else {
       res.status(400).send('Requisição mal-formulada');
    }
  });

module.exports = router;