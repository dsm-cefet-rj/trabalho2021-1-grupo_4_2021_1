const express = require('express');
const router = express.Router();

let turmas = 
{
    "id": "1",
    "username": "turmaDeProgramação@turma.com",
    "password": "123456",
    "tipoconta": "turma",
    "nome": "Turma de Programação",
    "dataInicio": "06/03",
    "dataFim": "27/06",
    "alunos": ["claudio", "eduardo", "leonardo", "matheus"]
}


router.post('/', (req, res) => {
    if(req.body){
        let id = turmas.push({...req.body, id: turmas.length + 1});
        res.status(201).json({id, msg: 'Turma criada com sucesso'});
    }
    else{
        res.status(400).send('Requisição mal-formulada');
    }
});

router.get('/', (req, res) => {
    res.status(200).send(turmas);
});

router.put('/:id', (req, res) => {
   if(req.body && req.params.id) {
       const tIndex = turmas.findIndex(t => t.id == req.params.id);
       if(tIndex) {
           turmas.splice(tIndex, 1, req.body);
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