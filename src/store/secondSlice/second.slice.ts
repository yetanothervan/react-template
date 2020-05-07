import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SecondState {
    secondString: string;
}

const initialState = {
    secondString: 'some string'
} as SecondState;

export const secondSlice = createSlice({
    name: 'secondSlice',
    initialState: initialState,
    reducers: {
        setSecondString: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                secondString: action.payload
            };
        }
    }
});

export const { actions } = secondSlice;
