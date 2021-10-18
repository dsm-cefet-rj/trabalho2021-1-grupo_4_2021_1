const express = require('express');
const Alunos = require('./models/alunos');
const Professores = require('./models/professores');
const Turmas = require('./models/turmas');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Escola = require('./models/root');

router.post('/login', async (req, res, next) => {

    const user = req.body.username;
    const pass = req.body.password;
    let usuario;
    switch(user.split('@')[1]) {
        case 'alunos.com':
            usuario = await Alunos.findOne({'username': user});
            break;
        case 'professores.com':
            usuario = await Professores.findOne({'username': user});
            break;
        case 'turmas.com':
            usuario = await Turmas.findOne({'username': user});
            break;
        case 'escola.com':
            usuario = await Escola.findOne({'username': user});
            break;
    }
    console.log(usuario);
    if (usuario && usuario.username == user && usuario.password == pass) {
        const token = jwt.sign({ usuario }, process.env.SECRET, {
            expiresIn: 30000 
          });
        return res.json({ auth: true, token: token });
    } 
    else {
        console.error('You are not authenticated!');     
        res.status(401).send('You are not authenticated!')
    }
});


router.post('/logout', (req, res) => {
    res.json({ auth: false, token: null });
})


module.exports = router;

