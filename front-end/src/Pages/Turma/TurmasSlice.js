import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpGet, httpPut, httpPost} from '../utils'
import {baseUrl} from '../baseUrl'

const turmasAdapter = createEntityAdapter();

const initialState = turmasAdapter.getInitialState({
    status: 'not_loaded',
    error: null
    /* o array turmas foi removido do state inicial, será criado pelo adapter */
});

export const updateTurmaServer = createAsyncThunk('turma/updateTurmaServer', async (turma, {getState}) => {
    return await httpPut(`${baseUrl}/turmas${turmas.id}`, turma, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});
export const fetchTurmaServer = createAsyncThunk('turma/fetchTurmaServer', async (_, {getState}) => {
    console.log(getState());
    return await httpGet(`${baseUrl}/turmas`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const turmasSlice = createSlice({
    name: 'turmas',
    initialState: initialState,
    reducers: {
        updateTurma: (state, action) => updateTurmaReducer(state, action.payload)

    },
    extraReducers: {
       [fetchTurmaServer.pending]: (state, action) => {state.status = 'loading';},
       [fetchTurmaServer.fulfilled]: (state, action) => {state.status = 'loaded'; turmasAdapter.setAll(state, action.payload);},
       [fetchTurmaServer.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},

       [updateTurmaServer.pending]: (state, action) => {state.status = 'loading'},
       [updateTurmaServer.fulfilled]: (state, action) => {state.status = 'saved'; turmasAdapter.upsertOne(state, action.payload);}
       
    },
})

export default turmasSlice.reducer

export const {
    selectAll: selectAllTurmas,
    selectById: selectTurmasById,
    selectIds: selectTurmasIds
} = turmasAdapter.getSelectors(state => state.turmas)