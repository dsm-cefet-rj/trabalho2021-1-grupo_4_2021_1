import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpGet, httpPut, httpPost} from '../utils'
import {baseUrl} from './baseUrl'

const turmasAdapter = createEntityAdapter();

const initialState = turmasAdapter.getInitialState({
    status: 'not_loaded',
    error: null
    /* o array turmas foi removido do state inicial, será criado pelo adapter */
});

export const updateturmaServer = createAsyncThunk('turmas/updateturmaServer', async (turma, {getState}) => {
    return await httpPut(`${baseUrl}//${turma.id}`, turma, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const turmasSlice = createSlice({
    name: 'turmas',
    initialState: initialState,
    extraReducers: {
 
       [updateTurmaServer.pending]: (state, action) => {state.status = 'loading'},
       [updateTurmaServer.fulfilled]: (state, action) => {state.status = 'saved'; turmasAdapter.upsertOne(state, action.payload);},
    },
})

export default turmasSlice.reducer

export const {
    selectAll: selectAllTurmas,
    selectById: selectTurmasById,
    selectIds: selectTurmasIds
} = turmasAdapter.getSelectors(state => state.turmas)