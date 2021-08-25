import { Grid } from '@material-ui/core';
import React from 'react';
import Card from '../CardMateria/button';


export default function cards() {

  return (
    <Grid container>
        <Grid item xs={3}>
            <Card materia ="turma 1" destino="prova/criar"/>
        </Grid>
        <Grid item xs={3}>
            <Card materia ="turma 2" destino="prova/criar"/>
        </Grid>
        <Grid item xs={3}>
            <Card materia ="turma 3" destino="prova/criar"/>
        </Grid>
        <Grid item xs={3}>
            <Card materia ="turma 4" destino="prova/criar"/>
        </Grid>
    </Grid>
  );
}
