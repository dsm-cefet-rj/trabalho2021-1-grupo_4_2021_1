import React from 'react';
import CardTurma from '../CardTurma/TurmaCard';
import './ListaDeTurmas.css';

export default function ListaDeTurmas() {
  return (
    <div>

      <div className="lista">
        <CardTurma
          nome="Turma de Calculo" dataInicio="21/06"
          dataFim="19/10" />

        <CardTurma
          nome="Turma de Programação" dataInicio="20/06"
          dataFim="18/10"  />


        <CardTurma
          nome="Turma de Ingles" dataInicio="21/6"
          dataFim="21/10"  />


      </div>
    </div>
  )
}