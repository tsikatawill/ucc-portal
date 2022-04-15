import { useContext, useState } from "react";
import { firebaseAuth } from "../components/auth/firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { GeneralContext } from "../components/context/GeneralContext";

const Login = () => {
  const [redirect, setRedirect] = useState(false);
  const { setLoggedInUser } = useContext(GeneralContext);

  console.log(setLoggedInUser);

  const signIn = () => {
    const google_provider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, google_provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        if (result.user) {
          setLoggedInUser(result.user);
        } else {
          setLoggedInUser({});
        }
        setRedirect(true);
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ error });
      });
  };
  return (
    <div className="grid place-content-center">
      {redirect && <Navigate to="/" />}

      <button
        className="btn bg-blue-500 p-4 rounded-md m-10 text-white"
        onClick={signIn}
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
