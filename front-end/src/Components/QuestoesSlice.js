import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from './Pages/utils'
import {baseUrl} from './Pages/baseUrl'

const QuestoesAdapter = createEntityAdapter();

const initialState = questoesAdapter.getInitialState({
    status: 'not_loaded',
    error: null
    /* o array questoes foi removido do state inicial, será criado pelo adapter */
});

export const fetchQuestoes = createAsyncThunk('questoes/fetchQuestoes', async (_, {getState}) => {
    console.log(getState());
    return await httpGet(`${baseUrl}/questoes`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const deleteQuestaoServer = createAsyncThunk('questoes/deleteQuestaoServer', async (idQuestao, {getState}) => {
    await httpDelete(`${baseUrl}/questoes/${idQuestao}`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
    return idQuestao;
});

export const addQuestaoServer = createAsyncThunk('questoes/addQuestaoServer', async (questao, {getState}) => {
    return await httpPost(`${baseUrl}/questoes`, questao, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const updateQuestaoServer = createAsyncThunk('questoes/updateQuestaoServer', async (questao, {getState}) => {
    return await httpPut(`${baseUrl}/questoes/${questao.id}`, questao, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const questoesSlice = createSlice({
    name: 'questoes',
    initialState: initialState,
    extraReducers: {
       [fetchQuestoes.pending]: (state, action) => {state.status = 'loading'},
       [fetchQuestoes.fulfilled]: (state, action) => {state.status = 'loaded'; questoesAdapter.setAll(state, action.payload);},
       [fetchQuestoes.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
       [deleteQuestaoServer.pending]: (state, action) => {state.status = 'loading'},
       [deleteQuestaoServer.fulfilled]: (state, action) => {state.status = 'deleted'; questoesAdapter.removeOne(state, action.payload);},
       [addQuestaoServer.pending]: (state, action) => {state.status = 'loading'},
       [addQuestaoServer.fulfilled]: (state, action) => {state.status = 'saved'; questoesAdapter.addOne(state, action.payload);},
       [updateQuestaoServer.pending]: (state, action) => {state.status = 'loading'},
       [updateQuestaoServer.fulfilled]: (state, action) => {state.status = 'saved'; questoesAdapter.upsertOne(state, action.payload);},
    },
})

export default questoesSlice.reducer

export const {
    selectAll: selectAllQuestoes,
    selectById: selectQuestoesById,
    selectIds: selectQuestoesIds
} = questoesAdapter.getSelectors(state => state.questoes)