export interface Review {
    id?: number;
    user: {
        id: number;
        firstName?: string;
        lastName?: string;
    };
    movie: {
        id: number;
    }
    rate: number;
    text: string;
    reviewDate: Date | string;
}