import React from 'react';
import {Link } from "react-router-dom";
import AlunoCard from "./CardAluno/AlunoCard";

function LinhaAluno(props){
    if(props != null && props.alunos != null && props.alunos.id != null){
        console.log(Object.keys(props).length);
        return(
            <tr><td><Link to={`aluno/${props.alunos.id}`} ><AlunoCard username={props.alunos.username} /></Link></td>
            </tr>
        );
    }else{
        return(<tr><td colSpan={3}>Não foi possível exibir o aluno.</td></tr>)
    }
}

export default LinhaAluno;