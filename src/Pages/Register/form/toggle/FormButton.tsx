import { useContext } from "react"
import { NButton } from "../../../../common/NButton"
import { styles } from "./style"
import { userContext } from "../../../../common/route/Context"
import { ButtonGroup } from "@mui/material"

type Props = {
  onToggleEdit: (stateMyself:boolean) => void;
}


export const FormButton = (props: Props) => {

  const { onToggleEdit } = props;

  const user = useContext(userContext);

  const changeHandler = (stateMyself: boolean) => {
    onToggleEdit(stateMyself);
  }

  return (
    <div style={{ width:'100%'}}>
      <ButtonGroup sx={{ width:'120vw', marginLeft:'12vw' }}>
        <NButton sx={styles.toggleL} onClick={() => changeHandler(true)} >{user?.name}</NButton>
        <NButton sx={styles.toggleR} onClick={() => changeHandler(false)}>{user?.partnerName}</NButton>
      </ButtonGroup>
    </div>
  )
}
