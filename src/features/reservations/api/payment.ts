import api from '@/lib/api';
import { PaymentFormValues } from '../schema/payment.schema';
import { PaymentResponse } from '../types/payment';


export const processPayment = async (paymentData: PaymentFormValues) => {
    const response = await api.post<PaymentResponse>("/payments", paymentData);
    return response.data;
}