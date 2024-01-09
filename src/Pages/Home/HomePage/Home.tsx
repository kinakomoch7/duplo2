import { useContext, useEffect, useState } from "react";
import { DifferencePay } from "../DifferencePay/DifferencePay";
import { EachPay } from "../EachPay/EachPay";
import { styles } from "./style";
import { userContext } from "../../../common/route/Context";
import { PaymentTableType } from "../../../types/mySQL";

export const Home = () => {

  const id = useContext(userContext)?.id;
  const [amountData, setAmountData] = useState({
    myAmount: 0,
    partnerAmount: 0,
  });

  console.log(id)

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    fetch(`${apiUrl}/getPayment?id=${id}`)
      .then(response => response.json())
      .then((data:PaymentTableType[]) => {

        const myAmountData = data.filter(item => item.money > 0);
        const partnerAmountData = data.filter(item => item.money < 0);

        const calculateTotalAmount = (items:PaymentTableType[]) => {
          return items.reduce((total, item) => total + Math.abs(item.money), 0);
        };

        setAmountData({
          myAmount: calculateTotalAmount(myAmountData),
          partnerAmount: calculateTotalAmount(partnerAmountData)
        });
      })
      .catch(error => {
        console.error('message:', error);
      }
    );
  },[])

  return (
    <div css={styles.container}>
      <EachPay amountData={amountData} />
      <div css={styles.differenceBox}>
        <DifferencePay amountData={amountData}/>
      </div>
    </div>
  );
};
