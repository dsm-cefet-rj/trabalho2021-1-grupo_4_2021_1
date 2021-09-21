const express = require('express');
const router = express.Router();

let Alunos = 
    {
        "id": 1,
        "username": "escola@escola.com",
        "password": "123456",
      }


router.get('/', (req, res) => {
    res.status(200).send(Alunos);
});

module.exports = router;