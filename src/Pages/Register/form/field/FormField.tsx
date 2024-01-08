import { InputAdornment, TextField } from "@mui/material";
import { NBox } from "../../../../common/NBox"
import { WHITE } from "../../../../common/style"
import { MoneyToJPY } from "../../../../common/MoneyToJPY";

type Props = {
  amount:number;
  onAmountEdit: (event: React.ChangeEvent<HTMLInputElement>) => void;
  note:string;
  onNoteEdit: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormField = (props:Props) => {

  const { amount, onAmountEdit, note, onNoteEdit } = props;

  const formatAmount = MoneyToJPY(amount);

  return (
    <NBox sx={{ bgcolor:WHITE, width: '90%', height:'40vh', borderRadius:'10px' }} >
      <TextField
        value={formatAmount}
        onChange={onAmountEdit}
        variant="standard"
        InputProps={{
          startAdornment: <InputAdornment position="start">¥</InputAdornment>,
          inputProps: {
            inputMode: 'numeric',
            pattern: '[0-9]*',
          },
        }}/>
      <TextField value={note} onChange={onNoteEdit} />
    </NBox>
  )
}
