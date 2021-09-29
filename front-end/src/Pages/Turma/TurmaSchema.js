  
import {string, object, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

export let turmaSchema = object().shape(
    {
        id: string(),
        nome: string().required().max(30),
        alunos: string(),
        turma: number(),
        professores: string(),
        dataInicio: string(),
        dataFim: string()
    }
)