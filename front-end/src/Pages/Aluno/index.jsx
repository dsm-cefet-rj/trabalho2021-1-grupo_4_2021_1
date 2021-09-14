import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import React, { useState, useFetch } from 'react';
import './index.css';
import ListaDeAlunos from './ListaAluno/ListaDeAlunos';
import { fetchAlunos, selectAllAlunos } from './AlunosSlice';
import { useSelector, useDispatch } from "react-redux";
import TabelaAlunos from "./TabelaAlunos";
import ListagemAluno from "./ListagemAluno";

import Button from '@material-ui/core/Button';

const aluno = (props) => {

    return(

        <div>
            <ListaDeAlunos />
            <ListagemAluno />
            
        </div>
        


    );
}

export default aluno;