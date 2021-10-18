const express = require('express');
const Escola = require('./models/root')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const el = await Escola.find();
      res.status(200).json(el);
    }
    catch(err) {
      res.status(500).send(err);
    }
  });

  router.post('/', (req, res, next) => {
    Escola.create(req.body)
      .then((el) => {
        console.log('Escola criada ', el);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(el);
      }, (err) => next(err))
        .catch((err) => next(err));
  });

module.exports = router;