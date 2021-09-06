import { alunosSlice } from "../Pages/Aluno/AlunosSlice";
import { examesSlice } from "../Pages/ExamesSlice";
import { professoresSlice } from "../Pages/Professor/ProfessoresSlice";
import { configureStore } from '@reduxjs/toolkit';
import {turmasSlice} from '../Pages/Turma/TurmasSlice';


export const store = configureStore({
    reducer: {
        alunos: alunosSlice.reducer,
        exames: examesSlice.reducer,
        professores: professoresSlice.reducer,
        turmas:  turmasSlice.reducer
    }
})