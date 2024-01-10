import { Typography } from "@mui/material"
import { NBox } from "../../../common/NBox"
import { NTypo } from "../../../common/NTypo"
import { MoneyToJPY } from "../../../common/MoneyToJPY";
import { useContext } from "react";
import { userContext } from "../../../common/route/Context";
import { BLACK, WHITE } from "../../../common/style";

type Props = {
  difference: number
}


export const HistoryHeader = (props:Props) => {

  const { difference } = props;

  const formattedMoney = MoneyToJPY((difference));

  const userName = useContext(userContext)?.name;

  return (
    <NBox sx={{ bgcolor:WHITE, height:'20vh' }} >
      <div style={{ height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-evenly' }}>
        <Typography sx={{ fontSize:20, fontWeight:'bold', color:BLACK }}>履歴</Typography>
        <NTypo fontSize={30}>{userName}</NTypo>
        {difference > 0 ? <NTypo fontSize={30}>+{formattedMoney}円</NTypo> : <NTypo fontSize={30}>{formattedMoney}円</NTypo>}
      </div>
    </NBox>
  )
}
