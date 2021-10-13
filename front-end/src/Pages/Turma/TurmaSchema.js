  
import {string, object, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';
import { array } from 'yup/lib/locale';

setLocale(ptForm)

export let turmaSchema = object().shape(
    {
        id: string(),
        nome: string().required().max(30),
        username: string().required().max(30),
        password: string().required().max(30),
        tipoconta: string().required(),
        alunos: array(),
        turma: number(),
        professor: string(),
        dataInicio: string(),
        dataFim: string()
    }
)