import { FormEvent, useContext, useEffect, useState } from "react";
import { firebaseAuth } from "../auth/firebase/firebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import FormHeader from "../components/FormHeader";

const Login = () => {
  const [redirect, setRedirect] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [formErrors, setFormErrors] = useState<string[]>([]);

  const { state } = useContext(AuthContext);

  useEffect(() => {
    state.loggedInUser ? setRedirect(true) : setRedirect(false);
  }, [state.loggedInUser]);

  const emailSignIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // ...
        if (user) {
          setRedirect(true);
          return dispatch({ type: "LOGIN", payload: user });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
      });
  };
  const googleSignIn = () => {
    const google_provider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, google_provider)
      .then((result) => {
        if (result.user) {
          setRedirect(true);
          return dispatch({ type: "LOGIN", payload: result.user });
        }
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  return (
    <section className="login-page flex flex-col gap-5 px-5 items-center py-5 -mt-20 min-h-[calc(100vh-5rem)] bg-slate-200">
      {redirect && <Navigate to="/" />}

      <FormHeader headerTitle="Login to your portal" />
      <form className="form-bg" onSubmit={(e) => emailSignIn(e)}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your student email"
          />
        </div>
        <div className="input-group">
          <div className="flex justify-between items-center">
            <label htmlFor="password">Password</label>
            <Link to="/reset-password" className="text-blue-500">
              Forgot password?
            </Link>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="px-3 py-2 rounded-md hover:bg-blue-400 w-full bg-blue-500 text-white"
        >
          Login
        </button>
      </form>
      <div className="google-sign-in form-bg text-center">
        Sign in with{" "}
        <span
          className="cursor-pointer text-blue-500 font-bold"
          onClick={googleSignIn}
        >
          Google
        </span>
      </div>
      <div className="register form-bg text-center">
        Don't have an account?{" "}
        <Link to="/signup" className="cursor-pointer text-blue-500 font-bold">
          Register
        </Link>
      </div>
    </section>
  );
};

export default Login;
