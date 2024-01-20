import { useContext, useState } from "react";
import { FormField } from "./form/field/FormField";
import { SaveButton } from "./form/saveButton/SaveButton";
import { FormButton } from "./form/toggle/FormButton";
import { HeadRegister } from "./header/HeadRegister";
import { userContext } from "../../common/route/Context";

export const Register = () => {

  const [isMyself, setIsMyself] = useState<boolean>();
  const [amount, setAmount] = useState<number>(10000);
  const [note, setNote] = useState('');

  const id = useContext(userContext)?.id;

  const onToggleEdit = (stateMyself: boolean) => {
    setIsMyself(stateMyself);
  }

  const onAmountEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/[^0-9]/g, '');
    setAmount(Number(value));
  }

  const onNoteEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  }

  const onSubmitEdit = () => {
    const money = isMyself ? amount : -amount;

    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    fetch(`${apiUrl}/addPayment?id=${id}&note=${note}&money=${money}`)
      .then(response => response.json())
      .then(data => {
        console.log('data:', data);
        setAmount(0);
        setNote('');
      })
      .catch(error => {
        console.error('message:', error);
      }
    );
  }


  return (
    <div>
      <HeadRegister />
      <div style={{ display:'flex', flexDirection:'column' , alignItems:'center', justifyContent:'space-evenly', height:'65vh' }} >
        <FormButton onToggleEdit={onToggleEdit}/>
        <FormField amount={amount} onAmountEdit={onAmountEdit} note={note} onNoteEdit={onNoteEdit} />
        <SaveButton onSubmitEdit={onSubmitEdit}/>
      </div>
    </div>
  );
};
