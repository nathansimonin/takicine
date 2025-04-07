export interface Review {
    id: number;
    user: {
        id: number;
        firstName: string;
        lastName: string;
    };
    rate: number;
    text: string;
    reviewDate: Date | string;
}