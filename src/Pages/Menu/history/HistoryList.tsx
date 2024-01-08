import { Typography } from "@mui/material"
import { BLACK } from "../../../common/style"
import { HistoryContent } from "./HistoryContent";
import { PaymentTableType } from "../../../types/mySQL";


export const HistoryList = (payments:PaymentTableType[]) => {

  const TEST_ARRAY = [1, 2, 3, 4, 5, 7, 8];

  console.log(payments)

  return (
    <div>
      <Typography sx={{ fontWeight:'bold', color:BLACK, fontSize:13 }} >支払い履歴</Typography>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', maxHeight:'43vh', overflow:'auto'}}>
        {TEST_ARRAY.map((item) => {
          return <HistoryContent key={item}/>;
        })}
      </div>
    </div>
  )
}
