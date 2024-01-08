import { Typography } from "@mui/material"
import { NButton } from "../../../../common/NButton"
import { BLOOD_ORANGE, WHITE } from "../../../../common/style"

type Props = {
  onSubmitEdit: ()=>void;
}

export const SaveButton = (props: Props) => {

  const { onSubmitEdit } = props;

  const submitHandler = () => {
    onSubmitEdit()
  }

  return (
    <NButton sx={{ bgcolor:BLOOD_ORANGE, width:'60vw', height:'6vh', }} onClick={submitHandler}>
      <Typography sx={{ color:WHITE, fontWeight:'bold', fontSize:18 }}>登録</Typography>
    </NButton>
  )
}
