const express = require('express');
const router = express.Router();

let respostas = 
{
    "exame": "1",
    "pergunta": "1",
    "answer": "0"
}


router.post('/', (req, res) => {
    if(req.body){
        let id = respostas.push({...req.body, id: respostas.length + 1});
        res.status(201).json({id, msg: 'Resposta da questão adicionada com sucesso'});
    }
    else{
        res.status(400).send('Requisição mal-formulada');
    }
});

router.get('/', (req, res) => {
    res.status(200).send(respostas);
});

router.put('/:id', (req, res) => {
   if(req.body && req.params.id) {
       const tIndex = respostas.findIndex(t => t.id == req.params.id);
       if(tIndex) {
           respostas.splice(tIndex, 1, req.body);
           res.status(200).send('Resposta da questão alterada com sucesso');
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