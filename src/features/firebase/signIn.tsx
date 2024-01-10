import { auth, provider } from "./firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithRedirect } from "firebase/auth";
import { AuthenticatedRoute } from "../../common/route/AuthenticatedRoute";
import { NButton } from "../../common/NButton";
import { BLOOD_ORANGE } from "../../common/style";

export const SignIn = () => {
  const [user] = useAuthState(auth);

  const signIn = () => {
    signInWithRedirect(auth, provider).catch((err) => alert(err.message));
  }

  console.log(user)

  if (user) {
    return <AuthenticatedRoute mail={user.email} />
  } else {
    return <NButton onClick={signIn} sx={{ backgroundColor:BLOOD_ORANGE }}>SignIn & SignUp</NButton>;
  }
}