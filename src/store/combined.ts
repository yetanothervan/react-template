import { combineReducers } from '@reduxjs/toolkit';
import { firstSlice } from './firstSlice/first.slice';
import { secondSlice } from './secondSlice/second.slice';

const combined = combineReducers({
    conditionEditor: firstSlice.reducer,
    ruleActionEditor: secondSlice.reducer,    
})

export type RootState = ReturnType<typeof combined>;

export default combined;
