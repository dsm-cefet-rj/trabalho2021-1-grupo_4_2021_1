import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { api } from '../../Components/services/api';
import UIContainer from '../../Components/Layout/Container/container';
import { Button } from 'react-bootstrap';

const rows = [
    
];

export default function ProfessorTable() {
    const [professores, setProfessores] = useState([]);

    useEffect(() => {

        async function loadProfessor() {
            const res = await api.get("professores");
            console.log(res.data)
            setProfessores(res.data)
        }
        loadProfessor();
    }, [])


    return (
        <UIContainer>
            <TableContainer component={Paper}>
                <Table className ="table-hover">
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
    );

}
