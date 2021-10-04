const express = require('express');
const Professores = require('./models/professores')
const router = express.Router();

router.post('/', (req, res) => {
    if(req.body){
      Professores.create(req.body).then(value => {
        res.status(201).json({_id: value._id, msg: 'Professor criado com sucesso'});
      }).catch(err => console.log(err));
    }
    else{
        res.status(400).send('Requisição mal-formulada');
    }
});

router.get('/', async (req, res) => {
  try {
    const professor = await Professores.find();
    res.status(200).json(professor);
  }
  catch(err) {
    res.status(500).send(err);
  }
});

router.get('/:id', async (req, res) => {
  if(req.params.id) {
    try {
      const professor = await Professores.findById(req.params.id);
      res.status(200).json(professor);
    }
    catch(err) {
      res.status(500).json("Id inválido")
    }
  }
  else {
    res.status(400).send('Id não encontrado');
  }
});

router.put('/:id', (req, res) => {
   if(req.body && req.params.id) {
      Professores.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, { new: true })
        .then(res => {
          res.status(200).json({msg: 'Professor alterada com sucesso', res});
        })
        .catch(err => res.status(400).json({msg: 'Id não encontrado', erro: err}))
   }
   else {
       res.status(400).send('Requisição mal-formulada');
    }
});

module.exports = router;