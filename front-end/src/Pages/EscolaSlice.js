import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpGet} from './utils'
import {baseUrl} from './baseUrl'

const escolaAdapter = createEntityAdapter();

const initialState = escolaAdapter.getInitialState({
    status: 'not_loaded',
    error: null
    /* o array escola foi removido do state inicial, será criado pelo adapter */
});

export const fetchEscola = createAsyncThunk('escola/fetchEscola', async (_, {getState}) => {
    console.log(getState());
    return await httpGet(`${baseUrl}/escola`, {headers: {Authorization: `${localStorage.getItem('token')}` }});
});

export const escolaSlice = createSlice({
    name: 'escola',
    initialState: initialState,
    extraReducers: {
       [fetchEscola.pending]: (state, action) => {state.status = 'loading'},
       [fetchEscola.fulfilled]: (state, action) => {state.status = 'loaded'; escolaAdapter.setAll(state, action.payload);},
       [fetchEscola.rejected]: (state, action) => {state.status = 'failed'; state.eescolarror = action.error.message},
    },
})

export default escolaSlice.reducer

export const {
    selectAll: selectAllEscola,
    selectById: selectEscolaById,
    selectIds: selectEscolaIds
} = escolaAdapter.getSelectors(state => state.escola)