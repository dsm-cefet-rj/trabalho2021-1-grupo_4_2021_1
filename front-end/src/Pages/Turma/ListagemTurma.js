import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTurmaServer, fetchTurmas, selectAllTurmas} from './TurmasSlice'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TabelaTurmas from './TabelaTurmas';

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
  

  function ListagemTurma(props){
    
    const turmas = useSelector(selectAllTurmas)
    const status = useSelector(state => state.turmas.status);
    const error = useSelector(state => state.turmas.error);
  
    const dispatch = useDispatch();
  
    const classes = useStyles();
  
    function handleClickExcluirAluno(id){
          dispatch(deleteAlunoServer(id));
    }
  
     useEffect(() => {
          if (status === 'not_loaded' ) {
              dispatch(fetchTurmas())
          }else if(status === 'failed'){
          }
      }, [status, dispatch])
      
    
    let tabelaTurmas;
    if(status === 'loaded' || status === 'saved' || status === 'deleted'){
      tabelaTurmas = <TabelaTurmas turmas={turmas} onClickExcluirAluno={handleClickExcluirAluno} />;
    }else if(status === 'loading'){
      tabelaTurmas = <div id="turmas">Carregando os turmas...</div>;
    }else if(status === 'not_loaded'){
      tabelaTurmas= '';
    }else{
      tabelaTurmas= <div id="turmas">Error: {error}</div>;
    }
  
    return (
              <>
                <div id="lbl_titulo_pagina"><Typography variant="h5">Listagem de Turmas</Typography></div><br/>
                {tabelaTurmas}
              </>
          );
  }
  
  export default ListagemAluno;
  