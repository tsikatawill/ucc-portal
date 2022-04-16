import { useContext, useEffect, useState } from "react";
import { firebaseAuth } from "../components/auth/firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Navigate, Link } from "react-router-dom";
import UCCLogo from "../images/ucc-logo.gif";
import GlassX from "glassx";

const Login = () => {
  const [redirect, setRedirect] = useState(false);

  const signIn = () => {
    const google_provider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, google_provider)
      .then((result) => {
        if (result.user) {
          GlassX.set({
            isLoggedIn: true,
          });
          localStorage.setItem("loggedInUser", JSON.stringify(result.user));
        } else {
          GlassX.set({
            isLoggedIn: false,
          });
        }
        setRedirect(true);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  // useEffect(() => {
  //   const data = localStorage.getItem("loggedInUser");
  //   if (data) {
  //     GlassX.set({ loggedInData: JSON.parse(data) });
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(
  //     "loggedInUser",
  //     JSON.stringify(GlassX.get("loggedInUser"))
  //   );
  // });
  return (
    <section className="login-page flex flex-col gap-5 px-5 items-center pt-5 min-h-screen bg-slate-200">
      {redirect && <Navigate to="/" />}

      <div className="header">
        <div className="logo-wrapper mb-2">
          <img src={UCCLogo} className="w-20 mx-auto" alt="logo" />
        </div>
        <h2 className="font-bold capitalize text-lg">Login to your portal</h2>
      </div>
      <form
        className="border-2 border-gray-300 rounded-md p-5 bg-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your student email"
          />
        </div>
        <div className="input-group">
          <div className="flex justify-between items-center">
            <label htmlFor="password">Password</label>
            <Link to="/" className="text-blue-500">
              Forgot password?
            </Link>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
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
      <div className="google-sign-in border-2 border-gray-300 rounded-md p-5 bg-white text-center">
        Sign in with{" "}
        <span
          className="cursor-pointer text-blue-500 font-bold"
          onClick={signIn}
        >
          Google
        </span>
      </div>
    </section>
  );
};

export default Login;
