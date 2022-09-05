import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {countNumberOfValidRecords} from "../../api/Spimex/Companies";

export const NAME = 'SpimexCompaniesCount';
export const UNKNOWN_ERROR = 'Unknown error';
export const INITIAL_STATE: State = {
    loading: false,
    error: '',
    count: 0
};

export const fetchCount = createAsyncThunk(`${NAME}/fetchCount`, countNumberOfValidRecords);

const SpimexCompaniesCountSlice = createSlice({
    name: NAME,
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCount.pending, (state) => {
            state.error = INITIAL_STATE.error;
            state.loading = true;
            state.count = INITIAL_STATE.count;
        });

        builder.addCase(fetchCount.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.count = payload;
        });

        builder.addCase(fetchCount.rejected, (state, action) => {
            state.error = action.error.message || UNKNOWN_ERROR;
            state.loading = false;
        });
    }
});

export const spimexCompaniesCountSlice = SpimexCompaniesCountSlice.reducer;

export type State = {
    loading: boolean,
    error: string,
    count: number,
};