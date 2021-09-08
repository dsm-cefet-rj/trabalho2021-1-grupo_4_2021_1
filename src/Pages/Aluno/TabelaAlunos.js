import React from 'react';
import LinhaAluno from './LinhaAluno';

function TabelaAlunos(props){
    if(props != null && props.alunos != null && props.alunos.length > 0){
      return(
          <table id="alunos" border="1">
              <tbody>
                {props.alunos.map((alunos) => <LinhaAluno key={alunos.id} alunos={alunos} 
                onClickExcluirAluno={props.onClickExcluirAluno} />)}
              </tbody>
          </table>
      );
    }else{
      return(<div id="alunos">Não existem alunos a serem exibidos.</div>)
    }
}

export default TabelaAlunos;