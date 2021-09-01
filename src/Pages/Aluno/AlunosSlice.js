import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../utils'
import {baseUrl} from '../baseUrl'

const alunosAdapter = createEntityAdapter();

const initialState = alunosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
    /* o array alunos foi removido do state inicial, será criado pelo adapter */
});

export const fetchAlunos = createAsyncThunk('alunos/fetchAlunos', async (_, {getState}) => {
    console.log(getState());
    return await httpGet(`${baseUrl}/alunos`, {headers: {}});
});

export const deleteAlunoServer = createAsyncThunk('alunos/deleteAlunoServer', async (idAluno, {getState}) => {
    await httpDelete(`${baseUrl}/alunos/${idAluno}`, {headers: {}});
    return idAluno;
});

export const addAlunoServer = createAsyncThunk('alunos/addAlunoServer', async (aluno, {getState}) => {
    return await httpPost(`${baseUrl}/alunos`, aluno, {headers: {}});
});

export const updateAlunoServer = createAsyncThunk('alunos/updateAlunoServer', async (aluno, {getState}) => {
    return await httpPut(`${baseUrl}/alunos/${aluno.id}`, aluno, {headers: {}});
});

export const alunosSlice = createSlice({
    name: 'alunos',
    initialState: initialState,
    extraReducers: {
       [fetchAlunos.pending]: (state, action) => {state.status = 'loading'},
       [fetchAlunos.fulfilled]: (state, action) => {state.status = 'loaded'; alunosAdapter.setAll(state, action.payload);},
       [fetchAlunos.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
       [deleteAlunoServer.pending]: (state, action) => {state.status = 'loading'},
       [deleteAlunoServer.fulfilled]: (state, action) => {state.status = 'deleted'; alunosAdapter.removeOne(state, action.payload);},
       [addAlunoServer.pending]: (state, action) => {state.status = 'loading'},
       [addAlunoServer.fulfilled]: (state, action) => {state.status = 'saved'; alunosAdapter.addOne(state, action.payload);},
       [updateAlunoServer.pending]: (state, action) => {state.status = 'loading'},
       [updateAlunoServer.fulfilled]: (state, action) => {state.status = 'saved'; alunosAdapter.upsertOne(state, action.payload);},
    },
})

export default alunosSlice.reducer

export const {
    selectAll: selectAllAlunos,
    selectById: selectAlunosById,
    selectIds: selectAlunosIds
} = alunosAdapter.getSelectors(state => state.alunos)