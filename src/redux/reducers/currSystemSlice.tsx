import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CurrSystemState {
    value: string
}

const initialState: CurrSystemState = {
    value: 'OE'
};

export const currSystemSlice = createSlice({
    name: 'currSystem',
    initialState,
    reducers: {
        setCurrSystem: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setCurrSystem } = currSystemSlice.actions;

export const selectCurrSystem = (state: RootState) => state.currSystem.value;

export default currSystemSlice.reducer;