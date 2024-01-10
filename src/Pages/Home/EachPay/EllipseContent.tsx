import { Avatar } from "@mui/material";
import { MoneyToJPY } from "../../../common/MoneyToJPY";
import { NBox } from "../../../common/NBox"
import { NTypo } from "../../../common/NTypo";
import { BLACK, WHITE } from "../../../common/style"

type Props = {
  style: React.CSSProperties;
  name?: string;
  money: number;
  icon?: string;
}

export const EllipseContent = (props:Props) => {

  const { style, name, money, icon } = props;

  const formattedMony = MoneyToJPY(money)
  const isIcon = icon && icon.length>0;

  return (
    <NBox
      style={{ width:'50%', height:'40vh', border:`solid 1px ${BLACK}`, backgroundColor:WHITE, ...style}}>
      <div style={{ display: "flex", flexDirection: 'column', height:'100%', justifyContent:'center' }}>
        <Avatar src={isIcon ?icon:undefined} sx={{ marginLeft:8, width:70, height:70}}>
          {!isIcon && name?.charAt(0)}
        </Avatar>
        <NTypo style={{ fontSize:30 }} >{name}</NTypo>
        <NTypo style={{ fontSize:30 }}>¥{formattedMony}</NTypo>
      </div>
    </NBox>
  )
}
