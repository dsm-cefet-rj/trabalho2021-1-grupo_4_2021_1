const express = require('express');
const router = express.Router();

let professores = [
    {
        "id": 1,
        "username": "leonardo@professor.com",
        "password": "123456"
    },
    {
        "nome": "12333",
        "turma": "12333",
        "tipoconta": "professores",
        "username": "12333@professores.com",
        "password": "123",
        "id": 2
    }
]

router.post('/', (req, res) => {
    if (req.body) {
        let id = professores.push({ ...req.body, id: professores.length + 1 });
        res.status(201).json({ id, msg: 'Turma criada com sucesso' });
    }
    else {
        res.status(400).send('Requisição mal-formulada');
    }
});

router.get('/', (req, res) => {
    res.status(200).send(professores);
});

router.put('/:id', (req, res) => {
    if (req.body && req.params.id) {
        const tIndex = professores.findIndex(t => t.id == req.params.id);
        if (tIndex) {
            professores.splice(tIndex, 1, req.body);
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

router.delete('/:id', (req, res) => {
    const {id}= req.params;
    const deleted = professores.filter(professores => professores.id ===  id);
    if(deleted){
        professores = professores.filter(professores => professores.id != id);
      res.status(200).json({message: "Professor apagado!"})
    }
    else{
      res.status(404).json({message: "Requisição mal-formulada"})
    }
  })

module.exports = router;