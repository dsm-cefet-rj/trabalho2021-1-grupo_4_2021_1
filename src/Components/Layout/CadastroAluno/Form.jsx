import React, {useState} from 'react';
import './Form.css'
import SplitButton from './botaogroup';

const initialValue = {
    Nome: ' ',
    Turma: ' ',
    Idade: ' ',
}


const Cadastro = () => {

    const[values, setValues] = useState(initialValue);

    function onChange(event) {
        const {name, value} = event.target;

        console.log({name, value})

        setValues({...values, [name]: value})
    }

    function onSubmit(event) {
        event.preventDeafult();

        
    }


    return (
        <div >
            <h1 className="title">Cadastro Aluno</h1>

            <form onSubmit={onSubmit}>
                <div className="cadastro-form">
                    <label htmlFor="aluno">Nome</label>
                    <input id="aluno" name="nome" type="text" onChange={onChange}/>
                </div>

                <div className="cadastro-form">
                    <label htmlFor="idTurma">Turma</label>
                    <input id="idTurma" name="turma" type="number" onChange={onChange}/>
                </div>

                <div className="cadastro-form">
                    <label htmlFor="alunoIdade">Idade</label>
                    <input id="alunoIdade" name="idade" type="number" onChange={onChange}/>
                </div>
                <div className="btn">

                    <SplitButton/>
                </div>
            </form>

        </div>
    )

};

export default Cadastro;