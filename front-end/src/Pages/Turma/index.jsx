import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import './index.css';
import ListaDeTurmas from './ListaTurma/ListaDeTurmas';
import ListaIntegrantes from './ListaIntegrantes/ListaIntegrantes';



const turma = (props) => {
    return(

        <div className='turma'>
            <ListaDeTurmas />
            <ListaIntegrantes />
        </div>
        


    );
}

export default turma;

{/* 
const Turma = (props) => {


    const [turma, setTurma] = useState(
        [{nome: '101' },
        {nome: '102' },
        {nome: '103' }
        ]);



    function renderTurma() {

        return turma.map(t => (
            <div className="turma">
                turma:{t.nome}
            </div>

        ))
    }

    return (
        <div className='turma-tabela'>

            <h1>Turmas</h1>
            <br />
            <label>
                {renderTurma()}
            </label>
            <button>
                Ver participantes
            </button>
        </div>

    );
}

export default Turma
*/}