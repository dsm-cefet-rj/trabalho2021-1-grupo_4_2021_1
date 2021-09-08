import React, {useEffect} from 'react';
import {Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {deleteAlunoServer, fetchAlunos, selectAllAlunos} from './AlunosSlice'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TabelaAlunos from './TabelaAlunos';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });
  

  function ListagemAluno(props){
    
    const alunos = useSelector(selectAllAlunos)
    const status = useSelector(state => state.alunos.status);
    const error = useSelector(state => state.alunos.error);
  
    const dispatch = useDispatch();
  
    const classes = useStyles();
  
    function handleClickExcluirAluno(id){
          dispatch(deleteAlunoServer(id));
    }
  
     useEffect(() => {
          if (status === 'not_loaded' ) {
              dispatch(fetchAlunos())
          }else if(status === 'failed'){
          }
      }, [status, dispatch])
      
    
    let tabelaAlunos;
    if(status === 'loaded' || status === 'saved' || status === 'deleted'){
      tabelaAlunos = <TabelaAlunos alunos={alunos} onClickExcluirAluno={handleClickExcluirAluno} />;
    }else if(status === 'loading'){
      tabelaAlunos = <div id="alunos">Carregando os alunos...</div>;
    }else if(status === 'not_loaded'){
      tabelaAlunos= '';
    }else{
      tabelaAlunos= <div id="alunos">Error: {error}</div>;
    }
  
    return (
              <>
                <div id="lbl_titulo_pagina"><Typography variant="h5">Listagem de Alunos</Typography></div><br/>
                {tabelaAlunos}
              </>
          );
  }
  
  export default ListagemAluno;
  