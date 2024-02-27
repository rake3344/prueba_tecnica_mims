export interface LoanInterface {
    userId: number;
    bookId: number;
}

export interface LoanResponseInterface extends LoanInterface {
    id: number;
    loanDate: string;
    returnDate: string;
}