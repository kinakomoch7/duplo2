import { Button, ButtonProps } from "@mui/material"
import { GARY } from "./style"

export const NButton = (props:ButtonProps) => {
  return <Button {...props} sx={{ ...props.sx, borderRadius:'10px', boxShadow:`0 3px 0 ${GARY}` }}/>
}
