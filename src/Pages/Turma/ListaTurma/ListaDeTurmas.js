import React from 'react';
import CardTurma from '../CardTurma/TurmaCard';
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container} from 'react-bootstrap'
import './ListaDeTurmas.css';

export default function ListaDeTurmas(props) {
  return (
    <div>
      <div className="lista">
        <CardTurma
          nome="Turma de Calculo" dataInicio="21/06"
          dataFim="19/10" />

        <CardTurma
          nome="Turma de Programação" dataInicio="20/06"
          dataFim="18/10"  professor="diogo"/> 


        <CardTurma
          nome="Turma de Ingles" dataInicio="21/6"
          dataFim="21/10"  />


      </div>
    </div>
  )
}