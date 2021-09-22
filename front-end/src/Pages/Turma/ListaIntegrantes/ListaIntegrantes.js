import React, { useEffect } from 'react';
import IntegranteCard from '../CardIntegrante/IntegranteCard';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTurmaServer, fetchTurmas, selectAllTurmas, selectTurmasById} from '../TurmasSlice';
import { fetchProfessores, selectAllProfessores } from '../../Professor/ProfessoresSlice';
import { fetchAlunos, selectAllAlunos } from '../../Aluno/AlunosSlice';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './ListaIntegrantes.css';
import { isFulfilled } from '@reduxjs/toolkit';


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

export default function ListaIntegrantes() {

 /*  const turmas = useSelector(selectAllTurmas)
  const status = useSelector(state => state.turmas.alunos.status);
  const error = useSelector(state => state.turmas.alunos.error); */

  const dispatch = useDispatch();

  const classes = useStyles();

  function handleClickExcluirIntegrante(id){
    dispatch(deleteTurmaServer.alunos(id))
  }

    useEffect(() => {
      if(status == 'not_loaded') {
        dispatch(fetchTurmas.alunos())
      }
    }, [status, dispatch])
    


    var professores = fetchProfessores();
    var aluno = fetchAlunos();

  return (
    <div>

      <div className="lista">
        <IntegranteCard
          
          professor= "diogo"
          alunos={["claudio","eduardo","leonardo","matheus"]}
          /*  */
          />

        <IntegranteCard
          professor="prof 2"
          alunos={["aluno 1","aluno 2","aluno 3","aluno 4"]} 
          // alunos={props.turmas.alunos.map()}
          />


        <IntegranteCard
         professor="prof 3"
         alunos={["aluno 5","aluno 6","aluno 7","aluno 8"]}
         />


      </div>
    </div>
  )
}
