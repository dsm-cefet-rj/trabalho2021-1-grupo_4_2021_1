var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Turmas = require('../models/turmas');

router.use(bodyParser.json());


router.route('/')
.options((req, res) => { res.sendStatus(200); })
.get((req, res, next) => {
  console.log(req.user);
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
.post((req, res, next) => {
  
  Turmas.create(req.body)
  .then((turma) => {
      console.log('Turma criado ', turma);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(turma);
  }, (err) => next(err))
  .catch((err) => next(err));

})

router.route('/:id')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
  let err;
  res.setHeader('Content-Type', 'application/json');
  try{
    //populate preenche o array de atividades com os documentos do collection actividades.
    const turmas = await Turmas.findById(req.params.id).populate('atividades');
    if(turmas != null){
      res.statusCode = 200;
      res.json(turmas);
    }else{
      err = {};
      res.statusCode = 404;
      res.json(err);
    }
  
  }catch(errParam){
    console.log(errParam);
    res.statusCode = 404;
    res.json({});
  }  

})
.delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  
  Turmas.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp.id);
    }, (err) => next(err))
    .catch((err) => next(err));


})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  
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


module.exports = router;