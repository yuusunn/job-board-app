import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JobBoardState, Job } from './types';

const initialState: JobBoardState = {
    jobs: [],
    loading: false,
    error: null,
};

const jobBoardSlice = createSlice({
    name: 'jobBoard',
    initialState,
    reducers: {
        fetchJobsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchJobsSuccess(state, action: PayloadAction<Job[]>) {
            state.loading = false;
            state.jobs = action.payload;
        },
        fetchJobsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        addJob(state, action: PayloadAction<Job>) {
            state.jobs.push(action.payload);
        },
        removeJob(state, action: PayloadAction<string>) {
            state.jobs = state.jobs.filter(job => job.id !== action.payload);
        },
    },
});

export const {
    fetchJobsStart,
    fetchJobsSuccess,
    fetchJobsFailure,
    addJob,
    removeJob,
} = jobBoardSlice.actions;

export default jobBoardSlice.reducer;