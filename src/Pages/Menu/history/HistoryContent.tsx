import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { NBox } from "../../../common/NBox"
import { BLACK, WHITE } from "../../../common/style"
import { PaymentTableType } from "../../../types/mySQL";
import { MoneyToJPY } from "../../../common/MoneyToJPY";
import { useContext, useState } from "react";
import { userContext } from "../../../common/route/Context";
import { DeleteForever } from "@mui/icons-material";


type Props = {
  payment: PaymentTableType;
  onDelete: (timeStamp: string) => void;
}

export const HistoryContent = (props: Props) => {

  const { payment, onDelete } = props;
  const user = useContext(userContext);

  const [openDialog, setOpenDialog] = useState(false);

  const formatMoney = MoneyToJPY(Math.abs(Math.round(payment.money)));
  const date = new Date(payment.timeStamp)
  const formatDate = date.toLocaleString('ja-JP', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  });

  const onDeleteClick = () => {
    setOpenDialog(true);
  };


  const confirmDeleteHandler = () => {
    const date = new Date(payment.timeStamp);
    const formattedDate = new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Asia/Tokyo',
    }).format(date);

    onDelete(formattedDate);
    setOpenDialog(false);
  }

  const cancelDeleteHandler = () => {
    setOpenDialog(false);
  }



  return (
    <div>
      <NBox sx={{ width:'90vw', height:'10vh', bgcolor:WHITE, borderRadius:'10px', marginBottom:'8px'}}>
        <div style={{justifyContent:'flex-end', display:'flex'}}>
          <Button variant="text" startIcon={<DeleteForever />} onClick={onDeleteClick} >削除</Button>
        </div>
        <div style={{ display:'flex', justifyContent:'space-around' }}>
          <Typography sx={{ color:BLACK, fontWeight:'bold'}} >{payment.money>0? user?.name :user?.partnerName}</Typography>
          <Typography sx={{ color:BLACK, fontWeight:'bold'}}>{formatMoney}円</Typography>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between'}}>
          <Typography sx={{ color:BLACK, marginLeft:3 }} variant="overline" >備考:{payment.note}</Typography>
          <Typography sx={{ color:BLACK, marginRight:3 }} variant="overline" >{formatDate}</Typography>
        </div>

        <Dialog open={openDialog} onClose={cancelDeleteHandler}>
          <DialogTitle>確認</DialogTitle>
          <DialogContent>
            <Typography>本当に削除しますか？</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={cancelDeleteHandler}>キャンセル</Button>
            <Button onClick={confirmDeleteHandler} variant="contained" color="error">
              はい
            </Button>
          </DialogActions>
        </Dialog>
      </NBox>
    </div>
  )
}
