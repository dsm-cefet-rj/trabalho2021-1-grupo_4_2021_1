import React, { useState } from 'react';
import { TipoEnum } from '../../shared/enums';
import { Question } from '../../Components/Question';
import { NewQuestion } from '../../Components/NewQuestion';
import './styles.css';
import { Edit } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

export const CreateExam = (props) => {
    const history = useHistory();

    const addQuestion = (tipo, enunciado) => {
        props.dispatch({type: 'add_question', payload: [...props.questoes, {pergunta: enunciado, tipo}]});
    }

    async function salvarProva() {
        alert("Prova criada com sucesso!");  
        history.push('/prova');
    }

    return (
        <div className="page">
            <header className="container-fluid header">
                <input className="nome" placeholder="Nome da Prova" />
                <Edit className="material-icons edit" fontSize="small" />
            </header>
            <div className="container prova d-flex">
                {props.questoes.map((questao, index) => {
                    const num = index + 1;
                    return <Question key={num} dados={questao} isEditing={true}>{num}</Question>
                })}
                <NewQuestion createNewQuestion={addQuestion} isEditing={true}>{props.questoes.length + 1}</NewQuestion>
            </div>
            <button type="button" className="btn btn-primary float-end" onClick={() => salvarProva()}>Salvar</button>
        </div>
    );
}