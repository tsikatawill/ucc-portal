import { FormEvent, useContext, useState } from "react";
import { firebaseAuth } from "../auth/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { Navigate } from "react-router-dom";
import UCCLogo from "../images/ucc-logo.gif";
import { AuthContext } from "../context/authContext";

const Signup = () => {
  const [redirect, setRedirect] = useState(false);
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password1 !== password2) {
      setFormErrors([...formErrors, "Passwords do not match"]);
      setFormErrors([...formErrors, "Passwords do not match"]);
    } else {
      console.log(email.split("@"));
      console.log({ user: { email, password: password1 } });
      signUp();
      setRedirect(true);
    }
  };

  const signUp = () => {
    createUserWithEmailAndPassword(firebaseAuth, email, password1)
      .then((userCredential) => {
        const user = userCredential.user;
        sendEmailVerification(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
      });
  };

  return (
    <section className="signup-page flex flex-col gap-5 px-5 items-center pt-5 min-h-screen bg-slate-200">
      {redirect && <Navigate to="/login" />}

      <div className="header">
        <div className="logo-wrapper mb-2">
          <img src={UCCLogo} className="w-20 mx-auto" alt="logo" />
        </div>
        <h2 className="font-bold capitalize text-lg">
          Create Your UCC Account
        </h2>
      </div>
      <form
        className="border-2 border-gray-300 rounded-md p-5 bg-white"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="input-group">
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            onChange={(e) => {
              let sad = e.target.value;
              console.log();
              setEmail(
                `${sad && sad.split(" ")[0][0]}${
                  sad && sad.split(" ")[1]
                }@stu.ucc.edu.gh`
              );
            }}
            placeholder={`Firstname Lastname`}
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            disabled
            required
            value={email}
            className="cursor-not-allowed"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your student email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password1">Password</label>
          <input
            id="password1"
            name="password1"
            type="password"
            required
            onChange={(e) => setPassword1(e.target.value)}
            placeholder="Enter a password"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            id="password2"
            name="password2"
            type="password"
            required
            onChange={(e) => setPassword2(e.target.value)}
            placeholder="Confirm your password"
          />
        </div>
        <button
          type="submit"
          className="px-3 py-2 rounded-md hover:bg-blue-400 w-full bg-blue-500 text-white"
        >
          Sign up
        </button>
      </form>
      <div className="google-sign-in border-2 border-gray-300 rounded-md p-5 bg-white text-center">
        Sign up with{" "}
        <span className="cursor-pointer text-blue-500 font-bold">Google</span>
      </div>
    </section>
  );
};

export default Signup;
