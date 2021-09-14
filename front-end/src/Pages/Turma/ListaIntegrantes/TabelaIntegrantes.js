import React from 'react';
import LinhaIntegrante from './LinhaTurma';
import ListagemIntegrantes from '../ListagemIntegrantes';


function TabelaIntegrantes(props){
    if(props != null && props.turmas != null && props.turmas.length > 0){
      return(
          <table id="integrantes" border="1">
              <tbody>
                {props.turmas.map((turmas) => <LinhaIntegrante key={turmas.id} integrante={turmas} 
                onClickExcluirIntegrante={props.onClickExcluirIntegrante} />)}
              </tbody>
          </table>
      );
    }else{
      return(<div id="integrantes">Não existem integrantes a serem exibidos.</div>)
    }
}

export default TabelaIntegrantes;