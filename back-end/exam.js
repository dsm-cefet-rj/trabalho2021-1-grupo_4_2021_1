const express = require('express');
const Prova = require('./models/exam');
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
      Prova.create(req.body).then(value => {
        res.status(201).json({_id: value._id, msg: 'Prova criada com sucesso'});
      }).catch(err => console.log(err));
    }
    else{
        res.status(400).send('Requisição mal-formulada');
    }
});

router.get('/', async (req, res) => {
  try {
    const provas = await Prova.find();
    res.status(200).json(provas);
  }
  catch(err) {
    res.status(500).send(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const provas = await Prova.findById(req.params.id);
    res.status(200).json(provas);
  }
  catch(err) {
    res.status(500).send(err);
  }
});

router.put('/:id', (req, res) => {
   if(req.body && req.params.id) {
      Prova.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, { new: true })
        .then(res => {
          res.status(200).json({msg: 'Prova alterada com sucesso', res});
        })
        .catch(err => res.status(400).json({msg: 'Id não encontrado', erro: err}))
   }
   else {
       res.status(400).send('Requisição mal-formulada');
    }
});

module.exports = router;