import { useContext } from "react"
import { EllipseContent } from "./EllipseContent"
import { userContext } from "../../../common/route/Context"
import { AmountDataType } from "../../../types/amount"

type Props = {
  amountData: AmountDataType;
}

export const EachPay = (props: Props) => {

  const { amountData } = props;

  const user = useContext(userContext);

  return (
    <div style={{ display:'flex', flexDirection:'row' }}>
      <EllipseContent style={{ borderRadius:'0 170px 170px 0' }} name={user?.name} money={amountData.myAmount} icon={user?.icon}/>
      <EllipseContent style={{ borderRadius:'170px 0 0 170px' }} name={user?.partnerName} money={amountData.partnerAmount}/>
    </div>
    
  )
}
