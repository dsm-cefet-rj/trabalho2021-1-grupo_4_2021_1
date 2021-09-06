import React, { useState } from 'react';
import { TipoEnum } from '../../shared/enums';
import { Question } from '../../Components/Question';
import { NewQuestion } from '../../Components/NewQuestion';
import './styles.css';
import { Edit } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addExameServer } from '../ExamesSlice';

export const CreateExam = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [questoes, setQuestoes] = useState([]);
    const [nomeProva, setNomeProva] = useState();

    const addQuestion = (tipo, pergunta, options) => {
        setQuestoes([...questoes, {pergunta, tipo, options}]);
    }

    async function salvarProva() {
        alert("Prova criada com sucesso!");
        dispatch(addExameServer({questoes, nomeProva})).then((res) => {
            history.push(`/prova/${res.payload.id}`);
        });
    }

    const handleNameChange = (event) => {
        setNomeProva(event.target.value);
    }

    return (
        <div className="page">
            <header className="container-fluid header">
                <input className="nome" placeholder="Nome da Prova" value={nomeProva} onChange={handleNameChange} />
                <Edit className="material-icons edit" fontSize="small" />
            </header>
            <div className="container prova d-flex">
                {questoes.map((questao, index) => {
                    const num = index + 1;
                    return <Question key={num} dados={questao} isEditing={true}>{num}</Question>
                })}
                <NewQuestion createNewQuestion={addQuestion} isEditing={true}>{questoes.length + 1}</NewQuestion>
            </div>
            <button type="button" className="btn btn-primary float-end" onClick={() => salvarProva()}>Salvar</button>
        </div>
    );
}