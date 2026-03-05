export interface Resolution {
    id: string;
    title: string;
    description: string;
    currentProgress: number;
    targetProgress: number;
    category?: string;
    createdDate: Date;
}