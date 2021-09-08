import React from 'react';
import './AlunoCard.css';
import {Link } from "react-router-dom";

export default function CardAluno(props) {
  
  function quantidade(props){
    
  }

  return (
    <Link to={'/prova/1'}>
    <div className="card-Aluno">
      <div className="nome-Aluno">
        {props.username}
      </div>
      <div>
        
      </div>

      <div className="periodo-aluno">
        {props.qnt}
      </div>
    </div>
    </Link>
  )
}



