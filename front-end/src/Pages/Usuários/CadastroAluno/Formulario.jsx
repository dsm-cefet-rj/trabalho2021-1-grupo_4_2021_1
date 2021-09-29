import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProfessorServer } from '../../Professor/ProfessoresSlice';
import { addAlunoServer } from '../../Aluno/AlunosSlice'
import { addTurmaServer } from '../../Turma/TurmasSlice';
import { tipoDeConta } from '../Helper/TipodeConta';

import { NavLink } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { Form } from 'react-bootstrap';
import './Formulario.css'

const initialValue = {
    nome: ' ',
    turma: ' ',
    tipoconta: ' ',
    username: ' ',
    password: ' ',
}

const Cadastro = () => {

    const dispatch = useDispatch();

    async function insertAluno(aluno) {
        dispatch(addAlunoServer(aluno)).then((res) => {
            alert("Aluno criado!");
        })
    }

    async function insertProfessor(professor) {
        dispatch(addProfessorServer(professor)).then((res) => {
            alert("Professor criado!");
        })
    }
    async function insertTurma(turma) {
        dispatch(addTurmaServer(turma)).then((res) => {
            alert("Turma criada!");
        })
    }

    const [values, setValues] = useState(initialValue);

    function onChange(event) {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value })
    }

    function onSubmit(event) {
        event.preventDefault();

        if (tipoDeConta(values.tipoconta) == "aluno") {
            values.username = values.username + "@alunos.com";
            insertAluno(values)
        } else if (tipoDeConta(values.tipoconta) == "professor") {
            values.username = values.username + "@professores.com";
            insertProfessor(values)
        } else if (tipoDeConta(values.tipoconta) == "turma"){
            values.username = values.username + "@turmas.com";
            insertTurma(values);
        }
        

        document.getElementById("formulario").reset();
    }

    return (
        <div className="div-card">


            <div >
                <h1 className="title">Cadastro de conta</h1>

                <form id="formulario" onSubmit={onSubmit}>
                    <div className="cadastro-form">
                        <label htmlFor="aluno">Nome</label>
                        <input id="aluno" name="nome" type="text" onChange={onChange} placeholder="Seu nome..." required />
                    </div>

                    <div className="cadastro-form">
                        <label htmlFor="idTurma">Turma</label>
                        <input id="idTurma" name="turma" type="number" onChange={onChange} placeholder="2272" required />
                    </div>

                    <div className="cadastro-form">
                        <label htmlFor="tipoConta">Tipo de conta</label>
                        <Form.Select id="tipoConta" name="tipoconta" onChange={onChange} className="formSelect" required>
                            <option value="disable" selected disabled>Selecione</option>
                            <option value="alunos">Aluno</option>
                            <option value="professores">Professor</option>
                            <option value="turmas">Turma</option>
                        </Form.Select>
                        <label htmlFor="alunoUsername">Email</label>
                    </div>
                    <div class="input-group mb-3 cadastro-especial">

                        <input id="alunoUsername" name="username" type="text" class="form-control" onChange={onChange} placeholder="nome da conta" aria-label="Recipient's username" aria-describedby="basic-addon2" required />

                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">{`@${tipoDeConta(values.tipoconta)}.com`}</span>
                        </div>
                    </div>
                    <div className="cadastro-form">

                        <label htmlFor="alunoSenha">Senha</label>

                        <input id="alunoSenha" name="password" type="password" onChange=
                            {onChange} placeholder="Sua senha..." required />

                    </div>
                    <div className="d-flex justify-content-between">

                        <NavLink to="/" className="btn btn-outline-dark"><AiFillHome /></NavLink>

                        <NavLink to="/cadastro/professores" className="btn btn-outline-primary">Professores</NavLink>

                        <NavLink to="/cadastro/alunos" className="btn btn-outline-primary">Alunos</NavLink>

                        <NavLink to="/cadastro/turmas" className="btn btn-outline-primary">Turmas</NavLink>

                        <button type="submit" className="btn btn-primary me-md-2">Salvar</button>
                    </div>
                </form>
            </div>

        </div>
    )


};

export default Cadastro;
