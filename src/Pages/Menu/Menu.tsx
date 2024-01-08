import { useContext, useEffect, useState } from "react";
import { HistoryHeader } from "./header/HistoryHeader";
import { HistoryList } from "./history/HistoryList";
import { userContext } from "../../common/route/Context";
import { PaymentTableType } from "../../types/mySQL";
import { CalcAmount } from "../../features/mysql/calcAmount";
import { AmountDataType } from "../../types/amount";

export const Menu = () => {

  const [amountData, setAmountData] = useState<AmountDataType>({
    myAmount: 0,
    partnerAmount: 0
  });
  const [payments, setPayments] = useState<PaymentTableType[]>();

  const id = useContext(userContext)?.id;


  useEffect(() => {
    fetch(`http://localhost:3000/get?id=${id}`)
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


  return (
    <div>
      <HistoryHeader difference={amountData?.myAmount-amountData?.partnerAmount} />
      <HistoryList payments={payments}/>
    </div>
  );
};
