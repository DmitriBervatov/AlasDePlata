import { useMutation } from "@tanstack/react-query";
import { processPayment } from "../api/payment";
import { PaymentFormValues } from "../schema/payment.schema";

export const usePayment = () => {
  return useMutation<PaymentResponse, Error, PaymentFormValues>(processPayment);
};
