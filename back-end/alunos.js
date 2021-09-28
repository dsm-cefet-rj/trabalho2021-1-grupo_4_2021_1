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
        res.status(201).json({ id, msg: 'Aluno criado com sucesso!' });
    }
    else {
        res.status(400).send('Requisição mal-formulada');
    }
});

router.get('/', (req, res) => {
    res.status(200).send(Alunos);
});

router.put('/:id', (req, res) => {
  //TARUIMSSADISGRAÇA
})

router.delete('/:id', (req, res) => {
  const {id}= req.params;
  const deleted = Alunos.filter(Alunos => Alunos.id ===  id);
  if(deleted){
    Alunos = Alunos.filter(Alunos => Alunos.id != id);
    res.status(200).json({message: "Aluno apagado!"})
  }
  else{
    res.status(404).json({message: "Requisição mal-formulada"})
  }
})

module.exports = router;