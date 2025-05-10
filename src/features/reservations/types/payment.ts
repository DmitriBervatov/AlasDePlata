
export interface PaymentResponse {
    id: number;
    reservationId: number;
    amount: number;
    paymentDate: string;
    paymentMethod: string;
    status: string;
    transactionId: string;
    currency: string;
    description: string;
}