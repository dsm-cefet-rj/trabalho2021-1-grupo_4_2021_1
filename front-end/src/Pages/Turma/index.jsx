import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import './index.css';
import ListaIntegrantes from './ListaIntegrantes/ListaIntegrantes';
import ListagemAluno from "../Aluno/ListagemAluno";

const turma = (props) => {
    return(

        <div className='turma'>
            <ListaIntegrantes />
            <ListagemAluno />
        </div>
        


    );
}

export default turma;

