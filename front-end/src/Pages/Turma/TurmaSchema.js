  
import {string, object, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

export let turmaSchema = object().shape(
    {
        id: string(),
        nome: string().required().max(30),
        integrantes: string().required()
    }
)