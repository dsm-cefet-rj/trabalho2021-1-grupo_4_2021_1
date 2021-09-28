import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UIContainer from '../../../../Components/Layout/Container/container';
import { fetchAlunos, selectAllAlunos } from '../../../Aluno/AlunosSlice'
import { tipoDeConta } from '../../Helper/TipodeConta';

import './EditaAluno.css'




const alunoValue = {
    nome: ' ',
    turma: ' ',
    tipoconta: ' ',
    username: ' ',
    password: ' ',
}

export const EditAlunos = () => {
    const alunos = useSelector(selectAllAlunos)
    const status = useSelector(state => state.alunos.status);
    
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'not_loaded') {
            dispatch(fetchAlunos())
        } else if (status === 'failed') {
        }
    }, [status, dispatch])

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
            values.username = values.username + "@professores.com"
            insertProfessor(values)
        }

        document.getElementById("formulario").reset();
    }

    return (

        <UIContainer>
            <div className="div-card">

                <div >
                    <h1 className="title">Editar Aluno</h1>

                    <form id="formulario" onSubmit={onSubmit}>
                        <div className="cadastro-form">
                            <label htmlFor="aluno">Nome</label>
                            <input id="aluno" name="nome" type="text" onChange={onChange} placeholder="Seu nome" required />
                        </div>

                        <div className="cadastro-form">
                            <label htmlFor="idTurma">Turma</label>
                            <input id="idTurma" name="turma" type="number" onChange={onChange} placeholder="2272" required />
                        </div>

                        <div className="cadastro-form">
                            <label htmlFor="idEmail">Email</label>
                            <input id="idEmail" name="email" type="text" onChange={onChange} placeholder="Email" required />
                        </div>

                        <div className="cadastro-form">

                            <label htmlFor="alunoSenha">Senha</label>

                            <input id="alunoSenha" name="password" type="password" onChange=
                                {onChange} placeholder="Sua senha" required />

                        </div>
                        <div className="d-flex justify-content-between">

                            <button type="submit" className="btn btn-primary me-md-2">Salvar</button>

                        </div>
                    </form>
                </div>

            </div>
        </UIContainer>
    )


};


export function insertAluno(aluno){
    
    document.getElementById('aluno').innerHTML = aluno.nome;
    document.getElementById('idTurma').innerHTML = aluno.turma;
    document.getElementById('idEmail').innerHTML = aluno.username;
    document.getElementById('alunoSenha').innerHTML = aluno.password;
}