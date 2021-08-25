import React, { useState } from 'react';
import { TipoEnum } from '../../shared/enums';
import { Question } from '../../Components/Question';
import './styles.css';
import { Edit } from '@material-ui/icons';

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

    const addQuestion = (tipo, enunciado) => {
        setQuestoes([...questoes, {pergunta: enunciado, tipo}]);
    }

    function salvarProva() {
        alert("Prova criada com sucesso!");
        window.location.pathname = '/prova';
    }

    return (
        <div class="page">
            <header class="container-fluid header">
                <input class="nome" placeholder="Nome da Prova" />
                <Edit className="material-icons edit" fontSize="small" />
            </header>
            <div class="container prova d-flex">
                {questoes.map((questao, index) => {
                    const num = index + 1;
                    return <Question key={num} dados={questao} isEditing={true}>{num}</Question>
                })}
                <Question dados={{ pergunta: null, tipo: null, options: null }} createNewQuestion={addQuestion} isEditing={true}>{questoes.length + 1}</Question>
            </div>
            <button type="button" class="btn btn-primary float-end" onClick={() => salvarProva()}>Salvar</button>
        </div>
    );
}