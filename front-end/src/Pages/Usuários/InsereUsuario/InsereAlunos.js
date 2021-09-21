/*import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAlunoServer } from '../../Aluno/AlunosSlice';

const insertToAlunos = (props) => {
    const dispatch = useDispatch();
    const [aluno, setAlunos] = useState([]);

    setAlunos(props)

    async function insertAluno(){
        dispatch(addAlunoServer(aluno)).then((res) => {
            alert("Aluno criado!");
        })
    }

}*/