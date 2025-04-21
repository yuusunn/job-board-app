// ジョブカード
export interface Job {
    id: string;
    title: string;
    description: string;
    company: string;
}

// ジョブボードの状態
export interface JobBoardState {
    jobs: Job[];
    loading: boolean;
    error: string | null;
}
