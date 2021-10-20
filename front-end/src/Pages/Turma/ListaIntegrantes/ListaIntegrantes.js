import { Paper, TableBody, TableCell, TableContainer } from '@material-ui/core';
import React, { useEffect} from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import UIContainer from '../../../Components/Layout/Container/container';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { fetchTurmas, selectAllTurmas, deleteTurmaServer, updateTurmaServer } from '../../Turma/TurmasSlice'
import Button from 'react-bootstrap/Button';


function ListaIntegrantes(props) {

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
                  <TableCell>Professor</TableCell>
                  <TableCell>Alunos</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {turmas.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row" className="turma">
                      {row.turma}
                    </TableCell>
                    <TableCell className="username">{row.nome}</TableCell>
                    <TableCell contentEditable="true">{row.dataInicio}</TableCell>
                    <TableCell contentEditable="true">{row.dataFim}</TableCell>
                    <TableCell className="professor">{row.professor} </TableCell>
                    <TableCell className="alunos">{row.alunos} </TableCell>
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

export default ListaIntegrantes;


