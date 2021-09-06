import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import Card from './CardTurma/TurmaCard';
import React, { useState } from 'react';
import './index.css';
import ListaDeTurmas from './ListaTurma/ListaDeTurmas';



const turma = (props) => {
    return(

        <div>
            <ListaDeTurmas />
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