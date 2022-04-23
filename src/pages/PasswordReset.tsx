import { sendPasswordResetEmail } from "firebase/auth";
import { FormEvent, useState } from "react";
import { firebaseAuth } from "../auth/firebase/firebase";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const resetPassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendPasswordResetEmail(firebaseAuth, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
      });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          resetPassword(e);
        }}
      >
        <div className="input-group">
          <label htmlFor="email">What is your email?</label>
          <input
            type="text"
            id="email"
            placeholder="enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default PasswordReset;
