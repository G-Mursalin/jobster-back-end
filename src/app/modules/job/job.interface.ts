export type TStatus = 'pending' | 'interview' | 'declined';
export type TJobType = 'full-time' | 'part-time' | 'remote' | 'internship';

export interface IJob {
    position: string;
    company: string;
    jobLocation: string;
    status: TStatus;
    jobType: TJobType;
}
