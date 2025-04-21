import { RootState } from '../../app/store';

// Select the entire job board state
export const selectJobBoardState = (state: RootState) => state.jobBoard;

// Select a list of jobs
export const selectJobList = (state: RootState) => state.jobBoard.jobs;

// Select a specific job by ID
export const selectJobById = (state: RootState, jobId: string) =>
    state.jobBoard.jobs.find(job => job.id === jobId);

// Select the loading state
export const selectJobBoardLoading = (state: RootState) => state.jobBoard.loading;

// Select any error messages
export const selectJobBoardError = (state: RootState) => state.jobBoard.error;