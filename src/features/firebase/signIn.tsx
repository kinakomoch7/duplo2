import { auth, provider } from "./firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithRedirect } from "firebase/auth";
import { AuthenticatedRoute } from "../../common/route/AuthenticatedRoute";

export const SignIn = () => {
  const [user] = useAuthState(auth);

  const signIn = () => {
    signInWithRedirect(auth, provider).catch((err) => alert(err.message));
  }

  console.log(user)

  if (user) {
    return <AuthenticatedRoute mail={user.email} />
  } else {
    return <button onClick={signIn}>サインイン</button>;
  }
}