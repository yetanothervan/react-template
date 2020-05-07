import { configureStore } from '@reduxjs/toolkit';
import combined from './combined';

export const store = configureStore({
    reducer: combined
});

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./combined', () => {
        const newCombined = require('./combined').default
        store.replaceReducer(newCombined)
    })
}

export default store;
