import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import CardAluno from '../CardAluno/AlunoCard';
import './ListaDeAlunos.css';



export default function ListaDeAlunos(props) {
  return (
    <div>

      <div className="lista">
        <CardAluno
          nome={props.username} qnt="5"
          />

        <CardAluno
          nome="Provas" qnt="2"
          />

        <CardAluno
          nome="Professores" qnt="6"
          />
      </div>
    </div>
  )
}