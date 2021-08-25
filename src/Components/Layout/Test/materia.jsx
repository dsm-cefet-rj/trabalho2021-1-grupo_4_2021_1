import { Grid } from '@material-ui/core';
import React from 'react';
import Card from '../CardMateria/button';


export default function cards() {

  return (
    <Grid container>
        <Grid item xs={3}>
            <Card materia ="Matemática"/>
        </Grid>
        <Grid item xs={3}>
            <Card materia ="Geografia"/>
        </Grid>
        <Grid item xs={3}>
            <Card materia ="História"/>
        </Grid>
        <Grid item xs={3}>
            <Card materia ="Física"/>
        </Grid>
    </Grid>
  );
}
