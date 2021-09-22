import React from 'react';
import LinhaTurma from './LinhaTurma';

function TabelaTurmas(props){
    if(props != null && props.turmas != null && props.turmas.length > 0){
      return(
          <table id="turmas" border="1">
              <tbody>
                {props.turmas.map((turmas) => <LinhaTurma key={turmas.id} turmas={turmas} 
                onClickExcluirTurma={props.onClickExcluirTurma} />)}
              </tbody>
          </table>
      );
    }else{
      return(<div id="turmas">Não existem turmas a serem exibidos.</div>)
    }
}

export default TabelaTurmas;