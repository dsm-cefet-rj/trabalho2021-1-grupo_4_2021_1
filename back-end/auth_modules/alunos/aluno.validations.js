import Joi from 'joi';

export const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

export default {
  signup: {
    body: {
        nome: Joi.string().required(),
        nome: Joi.string().required(),
        turma: Joi.string().required(),
        tipoconta: Joi.string().required(),
        username: Joi.string().email().required(),
        password: Joi.string().regex(passwordReg).required(),
    },
  },
};