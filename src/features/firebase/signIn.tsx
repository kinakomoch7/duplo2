import { auth, provider } from "./firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithRedirect, getRedirectResult, User } from "firebase/auth";
import { AuthenticatedRoute } from "../../common/route/AuthenticatedRoute";
import { NButton } from "../../common/NButton";
import { BLOOD_ORANGE } from "../../common/style";
import axios from 'axios';
import { useEffect } from "react";

export const SignIn = () => {
  const [user] = useAuthState(auth);

  const signIn = () => {
    signInWithRedirect(auth, provider).catch((err) => alert(err.message));
  }

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          registerUserInDatabase(result.user);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const registerUserInDatabase = (user:User) => {
    const { displayName, email, photoURL } = user;

    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    axios.get(`${apiUrl}/registerUser?name=${displayName}&email=${email}&icon=${photoURL}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(user);

  if (user) {
    return <AuthenticatedRoute mail={user.email} />;
  } else {
    return <NButton onClick={signIn} sx={{ backgroundColor: BLOOD_ORANGE }}>SignIn & SignUp</NButton>;
  }
};
