import { PaymentTableType } from "../../types/mySQL"


export const CalcAmount = (data:PaymentTableType[]) => {

  const myAmountData = data.filter(item => item.money > 0);
  const partnerAmountData = data.filter(item => item.money < 0);

  const calculateTotalAmount = (items:PaymentTableType[]):number => {
    return items.reduce((total, item) => total + Math.abs(item.money), 0);
  };

  return {
    myAmount: calculateTotalAmount(myAmountData),
    partnerAmount: calculateTotalAmount(partnerAmountData)
  };
};
