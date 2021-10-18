
const express = require('express');
const router = express.Router();
const Turmas = require('./models/turmas');



router.route('/')
.get(async (req, res, next)=> {

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
router.post('/', (req, res, next) => {
  Turmas.create(req.body)
    .then((turma) => {
      console.log('Turma criada ', turma);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(aluno);
    }, (err) => next(err))
      .catch((err) => next(err));
});

router.delete('/:id', async (req, res, next) => {
    Turmas.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp.id);
    }, (err) => next(err))
    .catch((err) => next(err));
})

router.put('/:id', (req, res) => {
    if(req.body && req.params.id) {
      Turmas.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, { new: true })
        .then(res => {
          res.status(200).json({msg: 'Turma alterada com sucesso', res});
        })
        .catch(err => res.status(400).json({msg: 'Id não encontrado', erro: err}))
   }
   else {
       res.status(400).send('Requisição mal-formulada');
    }
  });


module.exports = router;