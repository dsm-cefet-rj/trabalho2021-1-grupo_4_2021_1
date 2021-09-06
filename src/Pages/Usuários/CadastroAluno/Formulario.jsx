import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Formulario.css'
import { AiFillHome } from "react-icons/ai";
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
            let where = document.getElementById("tipoConta").value
            axios.post(`http://localhost:3001/${where}`, values);

            var info = document.getElementById("formulario").reset();

            alert("Enviado!")
        }
        catch (error) {
            console.log(error.message)
        }

    }

    return (
        <div className="div-card">


            <div >
                <h1 className="title">Cadastro de conta</h1>

                <form id="formulario" onSubmit={onSubmit}>
                    <div className="cadastro-form">
                        <label htmlFor="aluno">Nome</label>
                        <input id="aluno" name="nome" type="text" onChange={onChange} placeholder="Seu nome..." />
                    </div>

                    <div className="cadastro-form">
                        <label htmlFor="idTurma">Turma</label>
                        <input id="idTurma" name="turma" type="number" onChange={onChange} placeholder="2272" />
                    </div>

                    <div className="cadastro-form">
                        <label htmlFor="tipoConta">Tipo de conta</label>
                        <input id="tipoConta" name="tipoconta" type="text" onChange={onChange} placeholder="Professor/Aluno" />
                    </div>

                    <div className="cadastro-form">
                        <label htmlFor="alunoUsername">Email</label>
                        <input id="alunoUsername" name="username" type="email" onChange={onChange} placeholder="nome@tipodeconta.com" />
                    </div>
                    <div className="cadastro-form">
                        <label htmlFor="alunoSenha">Senha</label>
                        <input id="alunoSenha" name="password" type="password" onChange={onChange} placeholder="Sua senha..." />
                    </div>
                    <div className = "d-flex justify-content-between">
                        <NavLink to="/" className="btn btn-outline-dark"><AiFillHome/></NavLink>
                        <NavLink to="/cadastro/professores" className="btn btn-outline-primary">Professores</NavLink>
                        <NavLink to="/cadastro/alunos" className ="btn btn-outline-primary">Alunos</NavLink>
                        <button type="submit" className="btn btn-primary me-md-2">Salvar</button>
                    </div>
                </form>
            </div>
            
        </div>
    )


};

export default Cadastro;