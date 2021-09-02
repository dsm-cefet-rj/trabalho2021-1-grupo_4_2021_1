import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../utils'
import {baseUrl} from '../baseUrl'

const professoresAdapter = createEntityAdapter();

const initialState = professoresAdapter.getInitialState({
    status: 'not_loaded',
    error: null
    /* o array professores foi removido do state inicial, será criado pelo adapter */
});

export const fetchProfessores = createAsyncThunk('professores/fetchProfessores', async (_, {getState}) => {
    console.log(getState());
    return await httpGet(`${baseUrl}/professores`);
});

export const deleteProfessorServer = createAsyncThunk('professores/deleteProfessorServer', async (idProfessor, {getState}) => {
    await httpDelete(`${baseUrl}/professores/${idProfessor}`);
    return idProfessor;
});

export const addProfessorServer = createAsyncThunk('professores/addProfessorServer', async (professor, {getState}) => {
    return await httpPost(`${baseUrl}/professores`, professor);
});

export const updateProfessorServer = createAsyncThunk('professores/updateProfessorServer', async (professor, {getState}) => {
    return await httpPut(`${baseUrl}/professores/${professor.id}`, professor);
});

export const professoresSlice = createSlice({
    name: 'professores',
    initialState: initialState,
    extraReducers: {
       [fetchProfessores.pending]: (state, action) => {state.status = 'loading'},
       [fetchProfessores.fulfilled]: (state, action) => {state.status = 'loaded'; professoresAdapter.setAll(state, action.payload);},
       [fetchProfessores.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
       [deleteProfessorServer.pending]: (state, action) => {state.status = 'loading'},
       [deleteProfessorServer.fulfilled]: (state, action) => {state.status = 'deleted'; professoresAdapter.removeOne(state, action.payload);},
       [addProfessorServer.pending]: (state, action) => {state.status = 'loading'},
       [addProfessorServer.fulfilled]: (state, action) => {state.status = 'saved'; professoresAdapter.addOne(state, action.payload);},
       [updateProfessorServer.pending]: (state, action) => {state.status = 'loading'},
       [updateProfessorServer.fulfilled]: (state, action) => {state.status = 'saved'; professoresAdapter.upsertOne(state, action.payload);},
    },
})

export default professoresSlice.reducer

export const {
    selectAll: selectAllProfessores,
    selectById: selectProfessoresById,
    selectIds: selectProfessoresIds
} = professoresAdapter.getSelectors(state => state.professores)