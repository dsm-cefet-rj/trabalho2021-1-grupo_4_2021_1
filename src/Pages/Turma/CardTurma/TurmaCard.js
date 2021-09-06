import React from 'react';
import './TurmaCard.css';


export default function CardTurma(props) {
  return (
    <div className="card-Turma">
      <div className="nome-Turma">
        {props.nome}
      </div>
      <div>
        
      </div>

      <div className="periodo-turma">
        {props.dataInicio} - {props.dataFim}
      </div>
    </div>
  )
}



