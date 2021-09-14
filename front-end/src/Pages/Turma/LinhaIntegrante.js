import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import {Link } from "react-router-dom";
import IntegranteCard from "./CardIntegrante/IntegranteCard";

function LinhaIntegrante(props){
    if(props != null && props.turmas != null && props.turmas.id != null){
        console.log(Object.keys(props).length);
        return(
            <tr><td><Link to={`/turma/${props.turmas.id}`}><IntegranteCard nome={props.turmas.alunos.map()} /></Link></td>
            </tr>
        );
    }else{
        return(<tr><td colSpan={3}>Não foi possível exibir os integrantes.</td></tr>)
    }
}

export default LinhaIntegrante;