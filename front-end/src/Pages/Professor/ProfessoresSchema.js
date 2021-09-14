import { string, object, number, setLocale, ref } from 'yup';
import { ptForm} from 'yup-locale-pt';

setLocale(ptForm)

const mailMsg = "Digite o e-mail."

const 

export let ProfessoresSchema = object().shape(

    {
        id: number(),
        email: string().required,
        senha: string().required,
        turma: number()
    }
)