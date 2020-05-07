import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FirstState {
    firstString: string;
}

const initialState = {
    firstString: 'some string'
} as FirstState;

export const firstSlice = createSlice({
    name: 'firstSlice',
    initialState: initialState,
    reducers: {
        setFirstString: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                firstString: action.payload
            };
        }
    }
});

export const { actions } = firstSlice;
