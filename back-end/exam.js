const express = require('express');
const router = express.Router();

let provas = [
{
    "questoes": [
      {
        "pergunta": "Quem descobriu o Brasil?",
        "tipo": 2,
        "options": [
          "Pedro Alvares Cabral",
          "Cristovao Colombo",
          "Americo Vespucio",
          "Nabucodonosor"
        ]
      },
      {
        "pergunta": "Quanto é a raiz quadrada de 169?",
        "tipo": 1,
        "options": []
      },
      {
        "pergunta": "Marque as alternativas corretas sobre o ornitorrinco:",
        "tipo": 3,
        "options": [
          "É mamífero",
          "Bota ovos",
          "Voa",
          "Vive na água"
        ]
      }
    ],
    "nomeProva": "Prova 1",
    "id": 1,
    "respostas": [
      {
        "1": {
          "1": [
            "0"
          ],
          "2": [
            "13"
          ],
          "3": [
            "0",
            "2",
            "3"
          ]
        }
      }
    ]
  }
];

router.post('/', (req, res) => {
    if(req.body){
        let id = provas.push({...req.body, id: provas.length + 1});
        res.status(201).json({id, msg: 'Prova criada com sucesso'});
    }
    else{
        res.status(400).send('Requisição mal-formulada');
    }
});

router.get('/', (req, res) => {
    res.status(200).send(provas);
});

router.put('/:id', (req, res) => {
   if(req.body && req.params.id) {
       const pIndex = provas.findIndex(p => p.id == req.params.id);
       if(pIndex) {
           provas.splice(pIndex, 1, req.body);
           res.status(200).send('Prova alterada com sucesso');
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