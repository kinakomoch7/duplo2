import { Typography } from "@mui/material"
import { NBox } from "../../../common/NBox"
import { BLACK, WHITE } from "../../../common/style"

export const HeadRegister = () => {
  return (
    <NBox style={{ backgroundColor:WHITE, width:'100%', height: '8vh'}}>
      <div >
        <Typography sx={{color:BLACK, fontWeight:'bold', fontSize:18}}>支払い登録</Typography>
      </div>
    </NBox>
  )
}
