import { Paper, TableBody, TableCell, TableContainer } from '@material-ui/core';
import React, { useEffect} from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import UIContainer from '../../../Components/Layout/Container/container';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { fetchTurmas, selectAllTurmas, deleteTurmaServer, updateTurmaServer } from '../../Turma/TurmasSlice'
import Button from 'react-bootstrap/Button';


function ListaTurma(props) {

  const turmas = useSelector(selectAllTurmas)
  const status = useSelector(state => state.turmas.status);
  const error = useSelector(state => state.turmas.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'not_loaded') {
      dispatch(fetchTurmas())
    } else if (status === 'failed') {
      setTimeout(()=>dispatch(fetchTurmas()), 5000);
    }
  }, [status, dispatch])

  function updateTurma(Turma) {
    const turmaUptade = {
      username: "",
    }

    let allTurmas = document.querySelectorAll(".turma");
    let allUsername = document.querySelectorAll(".username");
    
    let i = 0;
    while (i != allTurmas.length) {
      if (allTurmas[i].innerHTML == Turma.turma) {
        turmaUptade.username = allUsername[i].innerHTML;
        break
      }
      else {
        i++
      }
    }
    let turmaChanged = Object.assign({}, Turma, turmaUptade);
    console.log(turmaChanged)
    dispatch(updateTurmaServer(turmaChanged));
  }

  function deletaTurma(id) {
    dispatch(deleteTurmaServer(id))
  }

  if (turmas.length != 0) {
    return (
      <>
        <UIContainer>
          <TableContainer component={Paper}>
            <Table className="table-hover">
              <TableHead>
                <TableRow>
                  <TableCell >Turma</TableCell>
                  <TableCell >Nome</TableCell>
                  <TableCell >Data de Inicio</TableCell>
                  <TableCell >Data de Fim</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {turmas.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row" className="turma">
                      {row.turma}
                    </TableCell>
                    <TableCell className="username" contentEditable="true">{row.nome}</TableCell>
                    <TableCell contentEditable="true">{row.dataInicio.split('T')[0]}</TableCell>
                    <TableCell contentEditable="true">{row.dataFim.split('T')[0]}</TableCell>
                    <TableCell><Button variant="danger" type="submit" onClick={() => deletaTurma(row.id)}>Apagar</Button></TableCell>
                    <TableCell><Button variant="primary" type="submit" onClick={() => updateTurma(row)}>Editar  </Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button href="/cadastro" variant="outline-primary" style={{ marginTop: "2%" }}>Voltar</Button>
        </UIContainer>
      </>
    )
  }
  else if(turmas.length == 0) {
    return (
      <>
        <UIContainer>
          <TableContainer component={Paper}>
            <Table className="table-hover">
              <TableHead>
                <TableRow>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell align="center"><h1>Lista Vazia!</h1></TableCell>
              </TableBody>
            </Table>
          </TableContainer>
          <Button href="/cadastro" variant="outline-primary" style={{ marginTop: "2%" }}>Voltar</Button>
        </UIContainer>
      </>
    )
  }
  else{
    return (
      <>
        <UIContainer>
          <TableContainer component={Paper}>
            <Table className="table-hover">
              <TableHead>
                <TableRow>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell align="center"><h1>Error: {error}</h1></TableCell>
              </TableBody>
            </Table>
          </TableContainer>
          <Button href="/cadastro" variant="outline-primary" style={{ marginTop: "2%" }}>Voltar</Button>
        </UIContainer>
      </>
    )
  }


}

export default ListaTurma;


