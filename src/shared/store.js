import alunosSlice from "../Pages/Aluno/AlunosSlice";
import examesSlice from "../Pages/ExamesSlice";
import professoresSlice from "../Pages/Professor/ProfessoresSlice";
import { configureStore } from '@reduxjs/toolkit';
import {turmasSlice} from '../Pages/Turma/TurmasSlice';


export const store = configureStore({
    reducer: {
        alunos: alunosSlice,
        exames: examesSlice,
        professores: professoresSlice,
    }
})