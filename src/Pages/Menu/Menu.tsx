import { useContext, useEffect, useState } from "react";
import { HistoryHeader } from "./header/HistoryHeader";
import { HistoryList } from "./history/HistoryList";
import { userContext } from "../../common/route/Context";
import { PaymentTableType } from "../../types/mySQL";
import { CalcAmount } from "../../features/mysql/calcAmount";
import { AmountDataType } from "../../types/amount";
import axios from "axios";

export const Menu = () => {

  const id = useContext(userContext)?.id;

  const [amountData, setAmountData] = useState<AmountDataType>({
    myAmount: 0,
    partnerAmount: 0
  });
  const [payments, setPayments] = useState<PaymentTableType[]>([{
    id: id,
    money: 0,
    note: '',
    timeStamp: String(new Date().getTime)
  }]);


  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
   fetch(`${apiUrl}/getPayment?id=${id}`)
      .then(response => response.json())
      .then((data:PaymentTableType[]) => {
        setAmountData(CalcAmount(data));
        setPayments(data);
      })
      .catch(error => {
        console.error('message:', error);
      }
    );
  },[])

  const handlePaymentDelete = async (timeStamp: string) => {
    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL;
      console.log(timeStamp);
      await axios.get(`${apiUrl}/deletePayment?timeStamp=${timeStamp}`);
 
      const response = await fetch(`${apiUrl}/getPayment?id=${id}`);
      const data: PaymentTableType[] = await response.json();
      setAmountData(CalcAmount(data));
      setPayments(data);
    } catch (error) {
      console.error('message:', error);
    }
  };

  return (
    <div>
      <HistoryHeader difference={amountData?.myAmount-amountData?.partnerAmount} />
      <HistoryList payments={payments} onDelete={handlePaymentDelete}/>
    </div>
  );
};
