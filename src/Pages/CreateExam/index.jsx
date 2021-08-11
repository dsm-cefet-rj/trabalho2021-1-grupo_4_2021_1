import React, { useState } from 'react';
import { TipoEnum } from '../../shared/enums';
import { Question } from '../../Components/Question';
import './styles.css';

export const CreateExam = (props) => {

    const [questoes, setQuestoes] = useState(
        [
            {
                pergunta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo ante, eleifend sit amet neque et, sollicitudin tempus nulla. Nulla sit amet tellus dolor. Inpretium euismod ipsum in tincidunt.",
                tipo: TipoEnum.discursiva
            },
            {
                pergunta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo ante, eleifend sit amet neque et, sollicitudin tempus nulla. Nulla sit amet tellus dolor. Inpretium euismod ipsum in tincidunt.",
                tipo: TipoEnum.discursiva
            }
        ]
    );

    return (
        <div class="page">
            <header class="container-fluid header">
                <input class="nome" placeholder="Nome da Prova" />
                <span class="material-icons edit">edit</span>
            </header>
            <div class="container prova d-flex">
                {questoes.map((questao, index) => {
                    const num = index + 1;
                    return <Question key={num} dados={questao}>{num}</Question>
                })}
                <Question dados={{pergunta: null, tipo: null, options: null}}>{questoes.length + 1}</Question>
            </div>
            <button type="button" class="btn btn-primary float-end">Salvar</button>
        </div>
    );
}