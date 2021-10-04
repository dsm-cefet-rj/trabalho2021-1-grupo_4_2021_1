import { Paper, TableBody, TableCell, TableContainer } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import UIContainer from '../../../Components/Layout/Container/container';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { deleteAlunoServer, fetchAlunos, selectAllAlunos, updateAlunoServer } from '../../Aluno/AlunosSlice'
import Button from 'react-bootstrap/Button';


function ListaAluno(props) {

  const alunos = useSelector(selectAllAlunos)
  const status = useSelector(state => state.alunos.status);
  const error = useSelector(state => state.alunos.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'not_loaded') {
      dispatch(fetchAlunos())
    } else if (status === 'failed') {
      setTimeout(()=>dispatch(fetchAlunos()), 5000);
    }
  }, [status, dispatch])


  function updateAluno(aluno){
    const alunoUptade = {
      nome: "",
      turma: "",
      username: "",
    }

    let allTurmas = document.querySelectorAll(".turma");
    let allUsername = document.querySelectorAll(".username");
    let allNome = document.querySelectorAll(".nome");
    let i = 0;
    while(i != allTurmas.length){
      if(allTurmas[i].innerHTML == aluno.turma){
        alunoUptade.turma = allTurmas[i].innerHTML;
        alunoUptade.username = allUsername[i].innerHTML;
        alunoUptade.nome = allNome[i].innerHTML;
        break
      }
      else{
        i++
      }
    }
    let alunoChanged = Object.assign({},aluno, alunoUptade);
    dispatch(updateAlunoServer(alunoChanged));
    location.reload();
  }

  function deletaAluno(id) {
    console.log(id);
    dispatch(deleteAlunoServer(id))
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
                <TableCell align="center"><h1>Carregando Alunos...</h1></TableCell>
              </TableBody>
            </Table>
          </TableContainer>
          <Button href="/cadastro" variant="outline-primary" style={{ marginTop: "2%" }}>Voltar</Button>
        </UIContainer>
      </>
    ) 
  }
  else if (alunos.length != 0) {
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
                {alunos.map((row) => (
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
                    <TableCell align="right"><Button variant="danger" type="submit" onClick={() => deletaAluno(row.id)}>Apagar</Button></TableCell>
                    <TableCell><Button variant="primary" type="submit" onClick={() => updateAluno(row) }>Alterar</Button></TableCell>
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
  else if(alunos.length == 0) {
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

export default ListaAluno;


