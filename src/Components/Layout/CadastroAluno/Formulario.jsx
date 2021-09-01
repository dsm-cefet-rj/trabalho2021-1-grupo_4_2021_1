import React, { useState } from 'react';
import './Formulario.css'
import axios from 'axios';


const initialValue = {
    nome: ' ',
    turma: ' ',
    tipoconta: ' ',
    username: ' ',
    password: ' ',
}


const Cadastro = () => {

    const [values, setValues] = useState(initialValue);

    function onChange(event) {
        const { name, value } = event.target;

        console.log({ name, value })

        setValues({ ...values, [name]: value })
    }

    function onSubmit(event) {
        event.preventDefault();

        try {
            axios.post('http://localhost:3000/users', values);

            var info = document.getElementById("formulario").reset();
            
            alert("Enviado!")
        }
        catch(error){
            console.log(erro.message)
        }
        
    }


    return (
        <div >
            <h1 className="title">Cadastro de conta</h1>

            <form id="formulario" onSubmit={onSubmit}>
                <div className="cadastro-form">
                    <label htmlFor="aluno">Nome</label>
                    <input id="aluno" name="nome" type="text" onChange={onChange} placeholder="Seu nome..."/>
                </div>

                <div className="cadastro-form">
                    <label htmlFor="idTurma">Turma</label>
                    <input id="idTurma" name="turma" type="number" onChange={onChange} placeholder="2272"/>
                </div>
                
                <div className="cadastro-form">
                    <label htmlFor="tipoConta">Tipo de conta</label>
                    <input id="tipoConta" name="tipoconta" type="text" onChange={onChange} placeholder="Professor/Aluno"/>
                </div>

                <div className="cadastro-form">
                    <label htmlFor="alunoUsername">Email</label>
                    <input id="alunoUsername" name="username" type="email" onChange={onChange} placeholder="nome@tipodeconta.com"/>
                </div>
                <div className="cadastro-form">
                    <label htmlFor="alunoSenha">Senha</label>
                    <input id="alunoSenha" name="password" type="password" onChange={onChange} placeholder="Sua senha..."/>
                </div>
                <div >
                    <button type="submit" className="botao">Salvar</button>
                </div>
            </form>

        </div>
    )

};

export default Cadastro;