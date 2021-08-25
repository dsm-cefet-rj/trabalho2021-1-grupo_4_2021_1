import { Grid } from '@material-ui/core';
import React from 'react';
import Card from '../CardMateria/button';


export default function cardsTurma() {

  return (
    <Grid container>
        <Grid item xs={3}>
            <Card materia ="Matemática" destino="prova"/>
        </Grid>
        <Grid item xs={3}>
            <Card materia ="Geografia" destino="prova"/>
        </Grid>
        <Grid item xs={3}>
            <Card materia ="História" destino="prova"/>
        </Grid>
        <Grid item xs={3}>
            <Card materia ="Física" destino="prova"/>
        </Grid>
    </Grid>
  );
}
