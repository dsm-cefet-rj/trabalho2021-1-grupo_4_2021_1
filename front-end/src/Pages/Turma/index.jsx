import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import './index.css';
import ListaDeTurmas from './ListaTurma/ListaDeTurmas';
import ListaIntegrantes from './ListaIntegrantes/ListaIntegrantes';
import ListagemAluno from "../Aluno/ListagemAluno";

const turma = (props) => {
    return(

        <div className='turma'>
            <ListaDeTurmas />
            <br></br>
            <ListaIntegrantes />
            <ListagemAluno />
        </div>
        


    );
}

export default turma;

