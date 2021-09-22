import { Paper, TableBody, TableCell, TableContainer } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import UIContainer from '../../../Components/Layout/Container/container';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { fetchProfessores, selectAllProfessores } from '../../Professor/ProfessoresSlice'
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
    }
  }, [status, dispatch])


  return (
    <>
      <UIContainer>
        <TableContainer component={Paper}>
          <Table className="table-hover">
            <TableHead>
              <TableRow>
                <TableCell align="right">Turma</TableCell>
                <TableCell align="center">Username</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {professores.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="right" component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.username}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button href="/cadastro" variant="outline-primary" style={{marginTop:"2%"}}>Voltar</Button>
      </UIContainer>

    </>
  );
}

export default ListaProfessores;
