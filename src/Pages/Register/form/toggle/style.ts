import { SxProps } from "@mui/material"
import { BLOOD_ORANGE } from "../../../../common/style";


const commonToggle: SxProps = {
  bgcolor: BLOOD_ORANGE,
  width: '30%'
}

export const styles:{
  toggleL: SxProps;
  toggleR: SxProps;
} = {
  toggleL:{
    marginRight:1,
    ...commonToggle
  },
  toggleR:{
    marginLeft:1,
    ...commonToggle
  }
}