import { Typography } from "@mui/material"
import { BLACK } from "../../../common/style"
import { HistoryContent } from "./HistoryContent";
import { PaymentTableType } from "../../../types/mySQL";

type Props = {
  payments: PaymentTableType[]
  onDelete: (timeStamp: string) => void;
}


export const HistoryList = (props: Props) => {

  const { payments, onDelete } = props;

  return (
    <div>
      <Typography sx={{ fontWeight:'bold', color:BLACK, fontSize:13 }} >支払い履歴</Typography>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', maxHeight:'43vh', overflow:'auto'}}>
        {payments.map((item) => {
          return <HistoryContent payment={item} key={item.timeStamp} onDelete={onDelete}/>;
        })}
      </div>
    </div>
  )
}
