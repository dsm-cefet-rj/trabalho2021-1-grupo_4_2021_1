import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../../utils'
import {baseUrl} from '../../baseUrl'

const escolaAdapter = createEntityAdapter();

const initialState = escolaAdapter.getInitialState({
    status: 'not_loaded',
    error: null
    /* o array escola foi removido do state inicial, será criado pelo adapter */
});

export const fetchEscola = createAsyncThunk('escola/fetchEscola', async (_, {getState}) => {
    console.log(getState());
    return await httpGet(`${baseUrl}/escola`);
});

export const deleteEscolaServer = createAsyncThunk('escola/deleteEscolaServer', async (idEscola, {getState}) => {
    await httpDelete(`${baseUrl}/escola/${idEscola}`);
    return idEscola;
});

export const addEscolaServer = createAsyncThunk('escola/addEscolaServer', async (Escola, {getState}) => {
    return await httpPost(`${baseUrl}/escola`, escola);
});

export const updateEscolaServer = createAsyncThunk('escola/updateEscolaServer', async (escola, {getState}) => {
    return await httpPut(`${baseUrl}/escola/${escola.id}`, escola);
});

export const escolaSlice = createSlice({
    name: 'escola',
    initialState: initialState,
    extraReducers: {
       [fetchEscola.pending]: (state, action) => {state.status = 'loading'},
       [fetchEscola.fulfilled]: (state, action) => {state.status = 'loaded'; escolaAdapter.setAll(state, action.payload);},
       [fetchEscola.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
       [deleteEscolaServer.pending]: (state, action) => {state.status = 'loading'},
       [deleteEscolaServer.fulfilled]: (state, action) => {state.status = 'deleted'; escolaAdapter.removeOne(state, action.payload);},
       [addEscolaServer.pending]: (state, action) => {state.status = 'loading'},
       [addEscolaServer.fulfilled]: (state, action) => {state.status = 'saved'; escolaAdapter.addOne(state, action.payload);},
       [updateEscolaServer.pending]: (state, action) => {state.status = 'loading'},
       [updateEscolaServer.fulfilled]: (state, action) => {state.status = 'saved'; escolaAdapter.upsertOne(state, action.payload);},
    },
})

export default escolaSlice.reducer

export const {
    selectAll: selectAllEscola,
    selectById: selectEscolaById,
    selectIds: selectEscolaIds
} = escolaAdapter.getSelectors(state => state.escola)