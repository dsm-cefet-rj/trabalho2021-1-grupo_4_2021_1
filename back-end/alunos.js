const express = require('express');
const router = express.Router();

let Alunos = [
    {
        "id": 1,
        "username": "leonardo@aluno.com",
        "password": "123456",
        "turmas": [
          "1",
          "2"
        ]
      },
      {
        "id": 2,
        "username": "tada@aluno.com",
        "password": "123456",
        "turmas": [
          "2"
        ]
      },
      {
        "id": 3,
        "username": "leo@aluno.com",
        "password": "21421",
        "turmas": [
          "3"
        ]
      }
]

router.post('/', (req, res) => {
    if (req.body) {
        let id = Alunos.push({ ...req.body, id: Alunos.length + 1 });
        res.status(201).json({ id, msg: 'Aluno criada com sucesso!' });
    }
    else {
        res.status(400).send('Requisição mal-formulada');
    }
});

router.get('/', (req, res) => {
    res.status(200).send(Alunos);
});

router.put('/:id', (req, res) => {
    if (req.body && req.params.id) {
        const tIndex = Alunos.findIndex(t => t.id == req.params.id);
        if (tIndex) {
            Alunos.splice(tIndex, 1, req.body);
            res.status(200).send('Turma alterada com sucesso');
        }
        else {
            res.status(400).send('Id não encontrado');
        }
    }
    else {
        res.status(400).send('Requisição mal-formulada');
    }
});

module.exports = router;