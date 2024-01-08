
export type UserTableType = {
  id: number;
  name: string;
  mail: string;
  icon: string;
  partnerName: string;
}

export type PaymentTableType = {
  id?: number;
  money: number;
  note: string;
  timeStamp: string;
}