export interface StripeInterface {
    bookId: number;
    quantity: number;
}

export interface StripeResponseInterface {
    payment_url: string
}