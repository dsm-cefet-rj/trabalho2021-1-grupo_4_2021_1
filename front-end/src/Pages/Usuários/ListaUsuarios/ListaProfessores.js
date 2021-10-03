import { Paper, TableBody, TableCell, TableContainer } from '@material-ui/core';
import React, { useEffect } from 'react';
import {  Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import UIContainer from '../../../Components/Layout/Container/container';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { fetchProfessores, selectAllProfessores, deleteProfessorServer, updateProfessorServer } from '../../Professor/ProfessoresSlice'
import Button from 'react-bootstrap/Button';


function ListaProfessores(props) {

  const professores = useSelector(selectAllProfessores)
  const status = useSelector(state => state.professores.status);
  const error = useSelector(state => state.professores.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'not_loaded') {
      dispatch(fetchProfessores())
    } else if (status === 'failed') {
      setTimeout(()=>dispatch(fetchProfessores()), 5000);
    }
  }, [status, dispatch])

  function updateProfessor(professor){
    
    const professorObj = {
      nome: document.getElementById('nome').innerHTML,
      turma: document.getElementById('turma').innerHTML,
      username: document.getElementById('username').innerHTML
    }
    let professorUpdate = Object.assign({},professor, professorObj)
    dispatch(updateProfessorServer(professorUpdate));
    location.reload();
  }


  function deletaProfessor(id) {
    dispatch(deleteProfessorServer(id))
  }

  if (status == 'loading') {
    return (
      <>
        <UIContainer>
          <TableContainer component={Paper} >
            <Table className="table-hover" >
              <TableHead >
                <TableRow>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell align="center"><h1>Carregando Professores...</h1></TableCell>
              </TableBody>
            </Table>
          </TableContainer>
          <Button href="/cadastro" variant="outline-primary" style={{ marginTop: "2%" }}>Voltar</Button>
        </UIContainer>
      </>
    ) 
  }
  else if (professores.length != 0) {
    return (
      <>
        <UIContainer>
          <TableContainer component={Paper}>
            <Table className="table-hover">
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
                {professores.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell id="turma" align="center" contentEditable="true">
                      {row.turma}
                    </TableCell>
                    <TableCell id="username" align="center" contentEditable="true" >
                      {row.username} 
                    </TableCell>
                    <TableCell id="nome" align="center" contentEditable="true" >
                      {row.nome}
                    </TableCell>
                    <TableCell align="center">
                      {row.tipoconta}
                    </TableCell>
                    <TableCell align="right"><Button variant="outline-danger" type="submit" onClick={() => deletaProfessor(row.id)}>Apagar</Button></TableCell>
                    <TableCell><Button variant="outline-primary" type="submit" onClick={() => updateProfessor(row) }>Enviar</Button></TableCell>
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
  else if(professores.length == 0) {
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
                <TableCell align="center"><h1>Lista Vazia!</h1></TableCell>
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

export default ListaProfessores;
