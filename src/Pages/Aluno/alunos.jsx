import React, { Component, useEffect, useState } from 'react';
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


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    
];

export default function AlunosTable() {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {

        async function loadAlunos() {
            const res = await api.get("alunos");
            console.log(res.data)
            setAlunos(res.data)
        }
        loadAlunos();
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
                        {alunos.map((row) => (
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
