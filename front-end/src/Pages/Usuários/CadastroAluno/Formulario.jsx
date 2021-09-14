import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Formulario.css'
import { AiFillHome } from "react-icons/ai";
import axios from 'axios';
import { Form } from 'react-bootstrap';



const initialValue = {
    nome: ' ',
    turma: ' ',
    tipoconta: ' ',
    username: ' ',
    password: ' ',
}

function tipoDeConta(e) {
    if(e == "professores"){
        return "professor"
    }
    else{
        return "aluno"
    }
}

const Cadastro = () => {

    const [values, setValues] = useState(initialValue);

    function onChange(event) {
        const { name, value } = event.target;

        setValues({ ...values, [name]: value })
    }

    function onSubmit(event) {
        event.preventDefault();

        if (tipoDeConta(values.tipoconta) == "aluno") {
            values.username = values.username + "@aluno.com"
            console.log("Entrou no Alunos")
        } else if (tipoDeConta(values.tipoconta) == "professor") {
            values.username = values.username + "@professor.com"
            console.log("Entrou no Professores")
        }

        try {
            let where = document.getElementById("tipoConta").value
            axios.post(`http://localhost:3001/${where}`, values);

            document.getElementById("formulario").reset();

            document.getElementById("tipoConta").value = "disable"

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
                        <input id="aluno" name="nome" type="text" onChange={onChange} placeholder="Seu nome..." required/>
                    </div>

                    <div className="cadastro-form">
                        <label htmlFor="idTurma">Turma</label>
                        <input id="idTurma" name="turma" type="number" onChange={onChange} placeholder="2272" required/>
                    </div>

                    <div className="cadastro-form">
                        <label htmlFor="tipoConta">Tipo de conta</label>
                        <Form.Select id="tipoConta" name="tipoconta" onChange={onChange} className="formSelect" required>
                            <option value="disable" selected disabled>Selecione</option>
                            <option value="alunos">Aluno</option>
                            <option value="professores">Professor</option>
                        </Form.Select>
                        <label htmlFor="alunoUsername">Email</label>
                    </div>
                    <div class="input-group mb-3 cadastro-especial">
                        
                        <input id="alunoUsername" name="username" type="text" class="form-control" onChange={onChange} placeholder="nome da conta" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                        
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">{`@${tipoDeConta(values.tipoconta)}.com`}</span>
                        </div>
                    </div>
                    <div className="cadastro-form">
                        
                        <label htmlFor="alunoSenha">Senha</label>
                        
                        <input id="alunoSenha" name="password" type="password" onChange=
                        {onChange} placeholder="Sua senha..." required/>
                    
                    </div>
                    <div className="d-flex justify-content-between">
                        
                        <NavLink to="/" className="btn btn-outline-dark"><AiFillHome /></NavLink>
                        
                        <NavLink to="/cadastro/professores" className="btn btn-outline-primary">Professores</NavLink>
                        
                        <NavLink to="/cadastro/alunos" className="btn btn-outline-primary">Alunos</NavLink>
                        
                        <button type="submit" className="btn btn-primary me-md-2">Salvar</button>
                    </div>
                </form>
            </div>

        </div>
    )


};

export default Cadastro;