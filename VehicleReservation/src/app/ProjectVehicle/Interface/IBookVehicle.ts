import { BPClient } from 'blocking-proxy';

export interface IbookVehicle
{
    vehicleNo?: string,
    memberId?: string
    NoOfDaysReserved?: number,
    amount?: number,
    reservationId?: number,
    bookstatus?:boolean
}