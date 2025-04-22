import { configureStore } from '@reduxjs/toolkit';
import jobBoardReducer from '../features/job-board/jobBoardSlice.ts';

const store = configureStore({
    reducer: {
        jobBoard: jobBoardReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;