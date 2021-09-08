import React from 'react';
import LinhaTurma from './LinhaTurma';

function TabelaIntegrantes(props){
    if(props != null && props.integrantes != null && props.integrantes.length > 0){
      return(
          <table id="integrantes" border="1">
              <tbody>
                {props.integrantes.map((turma) => <LinhaTurma key={integrante.id} integrante={integrante} 
                onClickExcluirIntegrante={props.onClickExcluirIntegrante} />)}
              </tbody>
          </table>
      );
    }else{
      return(<div id="integrantes">Não existem integrantes a serem exibidos.</div>)
    }
}

export default tabelaIntegrantes;