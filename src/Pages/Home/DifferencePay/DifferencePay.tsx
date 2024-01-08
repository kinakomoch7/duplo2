import { NBox } from "../../../common/NBox"
import { NTypo } from "../../../common/NTypo"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import WestIcon from '@mui/icons-material/West';
import { divStyles, muiStyles } from "./style";
import { useContext } from "react";
import { userContext } from "../../../common/route/Context";
import { MoneyToJPY } from "../../../common/MoneyToJPY";
import { AmountDataType } from "../../../types/amount";

type Props = {
  amountData: AmountDataType
}


export const DifferencePay = (props:Props) => {

  const { amountData } = props;

  const user = useContext(userContext);

  const money = amountData.myAmount - amountData.partnerAmount;

  const formattedMony = MoneyToJPY(Math.abs(money));

  return (
    <NBox {...muiStyles.box} >
      <div css={divStyles.container}>
        <div css={divStyles.userDisplay} >
          <NTypo style={{ fontSize:20 }} >{user?.name}</NTypo>
          { money>0 ? <ArrowRightAltIcon sx={muiStyles.icon} /> : <WestIcon sx={muiStyles.icon}/>}
          <NTypo style={{ fontSize:20 }} >{user?.partnerName}</NTypo>
        </div>
        <div>
          <NTypo style={{ fontSize:30 }}>¥{formattedMony} 円支払う</NTypo>
        </div>
      </div>
    </NBox>
  )
}
