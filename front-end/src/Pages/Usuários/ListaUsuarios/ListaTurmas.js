import { Paper, TableBody, TableCell, TableContainer } from '@material-ui/core';
import React, { useEffect} from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import UIContainer from '../../../Components/Layout/Container/container';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { deleteTurmaServer, fetchTurmas, selectAllTurmas, updateTurmaServer } from '../../Turma/TurmasSlice'
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


  function updateTurma(turma){
    const turmaUpdate = {
      nome: "",
      turma: "",
      username: "",
    }

    let allTurmas = document.querySelectorAll(".turma");
    let allUsername = document.querySelectorAll(".username");
    let allNome = document.querySelectorAll(".nome");
    let i = 0;
    while(i != allTurmas.length){
      if(allTurmas[i].innerHTML == turma.turma){
        turmaUpdate.turma = allTurmas[i].innerHTML;
        turmaUpdate.username = allUsername[i].innerHTML;
        turmaUpdate.nome = allNome[i].innerHTML;
        break
      }
      else{
        i++
      }
    }
    let turmaChanged = Object.assign({},turma, turmaUpdate);
    dispatch(updateTurmaServer(turmaChanged));
    location.reload();
  }

  function deletaTurma(id) {
    console.log(id);
    dispatch(deleteTurmaServer(id))
  }
  if (status == 'loading') {
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
                <TableCell align="center"><h1>Carregando Turmas...</h1></TableCell>
              </TableBody>
            </Table>
          </TableContainer>
          <Button href="/cadastro" variant="outline-primary" style={{ marginTop: "2%" }}>Voltar</Button>
        </UIContainer>
      </>
    ) 
  }
  else if (turmas.length != 0) {
    return (
      <>
        <UIContainer>
          <TableContainer component={Paper}>
            <Table className="table-hover" >
              <TableHead>
                <TableRow>
                  <TableCell align="center">Turma</TableCell>
                  <TableCell align="center">Username</TableCell>
                  <TableCell align="center">Nome</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {turmas.map((row) => (
                  <TableRow key={row.id} >
                    <TableCell className="turma" align="center" contentEditable="true">
                      {row.turma}
                    </TableCell>
                    <TableCell className="username" align="center" contentEditable="true" >
                      {row.username} 
                    </TableCell>
                    <TableCell className="nome" align="center" contentEditable="true" >
                      {row.nome}
                    </TableCell>
                    <TableCell align="center">
                      {row.tipoconta}
                    </TableCell>
                    <TableCell align="right"><Button variant="danger" type="submit" onClick={() => deletaTurma(row.id)}>Apagar</Button></TableCell>
                    <TableCell><Button variant="primary" type="submit" onClick={() => updateTurma(row) }>Alterar</Button></TableCell>
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
                <TableCell align="center"><h1>Error: {error};</h1></TableCell>
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


