import React, {useEffect} from 'react';
import {Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {deleteIntegranteServer, fetchIntegrantes, selectAllIntegrantes} from './IntegrantesSlice'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import TabelaIntegrantes from './TabelaIntegrantes';

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
  

  function ListagemIntegrantes(props){
    
    const integrantes = useSelector(selectAllIntegrantes)
    const status = useSelector(state => state.integrantes.status);
    const error = useSelector(state => state.integrantes.error);
  
    const dispatch = useDispatch();
  
    const classes = useStyles();
  
    function handleClickExcluirTurma(id){
          dispatch(deleteIntegranteServer(id));
    }
  
     useEffect(() => {
          if (status === 'not_loaded' ) {
              dispatch(fetchIntegrantes())
          }else if(status === 'failed'){
          }
      }, [status, dispatch])
      
    
    let tabelaIntegrantes;
    if(status === 'loaded' || status === 'saved' || status === 'deleted'){
      tabelaIntegrantes = <TabelaIntegrantes integrantes={integrantes} onClickExcluirIntegrante={handleClickExcluiIntegrante} />;
    }else if(status === 'loading'){
      tabelaIntegrantes = <div id="integrantes">Carregando os integrantes...</div>;
    }else if(status === 'not_loaded'){
      tabelaIntegrantes = '';
    }else{
      tabelaIntegrantes = <div id="integrantes">Error: {error}</div>;
    }
  
    return (
              <>
                <div id="lbl_titulo_pagina"><Typography variant="h3">Listagem de Integrantes</Typography></div><br/>
                <Button className={classes.root} id="Novo Integrante" name="btn_novo_integrante" to="/integrantes/novo" component={Link}>Novo Integrante</Button><br/><br/>
                {tabelaIntegrantes}
              </>
          );
  }
  
  export default ListagemIntegrantes;
  