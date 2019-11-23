export interface IPayment{
    reservationId: number,
    paymentId?: number,
    paymentMode: string,
    amount: number,
}