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
      <div style={{ display:"flex", flexDirection:'column', justifyContent:'center', flexWrap:'wrap' }}>
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
          }}
          sx={{
            "& label.Mui-focused": {
              fontWeight: "bold", // フォーカス時のラベルの太字
            },
            "& .MuiInputBase-input": {
              textAlign: "center", // 中央揃え
              fontSize: "3rem", // フォントサイズを大きく
            },
            "& .MuiInputBase-root": {
              height: "20vh", // フィールド自体の高さを指定
            },
          }}
        />
        <TextField
          variant="filled"
          value={note}
          onChange={onNoteEdit}
          sx={{
            "& label.Mui-focused": {
              fontWeight: "bold", // フォーカス時のラベルの太字
            },
            "& .MuiInputBase-input": {
              textAlign: "center", // 中央揃え
              fontSize: "1.3rem", // フォントサイズを大きく
            },
            "& .MuiInputBase-root": {
              height: "20vh",
              minWidth: '30vw'
            },
          }}
        />
      </div>
    </NBox>
  )
}
