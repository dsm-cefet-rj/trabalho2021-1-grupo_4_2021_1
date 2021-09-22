  
import {string, object, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

export let turmaSchema = object().shape(
    {
        id: int(),
        nome: string().required().max(30),
        alunos: string().required(),
        professores: string().required(),
        dataInicio: string().required(),
        dataFim: string().required()
    }
)