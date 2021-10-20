import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from './utils'
import {baseUrl} from './baseUrl';

const examesAdapter = createEntityAdapter({
    selectId: (model) => model._id
});

const initialState = examesAdapter.getInitialState({
    status: 'not_loaded',
    error: null
    /* o array exames foi removido do state inicial, será criado pelo adapter */
});

export const fetchExames = createAsyncThunk('exames/fetchExames', async (_, {getState}) => {
    console.log(getState());
    return await httpGet(`${baseUrl}/exames`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}` }});
});

export const fetchExamesById = createAsyncThunk('exames/fetchExamesById', async (id, {getState}) => {
    return await httpGet(`${baseUrl}/exames/${id}`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}` }});
});

export const deleteExameServer = createAsyncThunk('exames/deleteExameServer', async (idExame, {getState}) => {
    await httpDelete(`${baseUrl}/exames/${idExame}`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}` }});
    return idExame;
});

export const addExameServer = createAsyncThunk('exames/addExameServer', async (exame, {getState}) => {
    return await httpPost(`${baseUrl}/exames`, exame, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}` }});
});

export const updateExameServer = createAsyncThunk('exames/updateExameServer', async (exame, {getState}) => {
    return await httpPut(`${baseUrl}/exames/${exame._id}`, exame, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}` }});
});

export const examesSlice = createSlice({
    name: 'exames',
    initialState: initialState,
    extraReducers: {
       [fetchExames.pending]: (state, action) => {state.status = 'loading'},
       [fetchExames.fulfilled]: (state, action) => {state.status = 'loaded'; examesAdapter.setAll(state, action.payload);},
       [fetchExames.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
       [fetchExamesById.pending]: (state, action) => {state.status = 'loading'},
       [fetchExamesById.fulfilled]: (state, action) => {state.status = 'loaded'; examesAdapter.setOne(state, action.payload);},
       [fetchExamesById.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
       [deleteExameServer.pending]: (state, action) => {state.status = 'loading'},
       [deleteExameServer.fulfilled]: (state, action) => {state.status = 'deleted'; examesAdapter.removeOne(state, action.payload);},
       [addExameServer.pending]: (state, action) => {state.status = 'loading'},
       [addExameServer.fulfilled]: (state, action) => {state.status = 'saved'; examesAdapter.addOne(state, action.payload);},
       [updateExameServer.pending]: (state, action) => {state.status = 'loading'},
       [updateExameServer.fulfilled]: (state, action) => {state.status = 'saved'; examesAdapter.upsertOne(state, action.payload);},
    },
})

export default examesSlice.reducer

export const {
    selectAll: selectAllExames,
    selectById: selectExamesById,
    selectIds: selectExamesIds
} = examesAdapter.getSelectors(state => state.exames)