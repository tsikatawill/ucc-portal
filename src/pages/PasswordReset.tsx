import { sendPasswordResetEmail } from "firebase/auth";
import { FormEvent, useState } from "react";
import { firebaseAuth } from "../auth/firebase/firebase";
import FormHeader from "../components/FormHeader";

const PasswordReset = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const resetPassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      sendPasswordResetEmail(firebaseAuth, email)
        .then(() => {
          setLoading(false);
          // Password reset email sent!
          alert(`Password reset email has been sent to ${email}`);
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(
            `Password reset email could not be sent to ${email} \n${
              errorMessage.split("/")[1]
            }`
          );
          console.log({ errorCode, errorMessage });
        });
    }, 4000);
  };

  return (
    <div className="px-5 -mt-10">
      <FormHeader headerTitle="Reset your password" />
      <form
        onSubmit={(e) => {
          resetPassword(e);
        }}
        className="form-bg flex flex-col mx-auto items-center mt-5"
      >
        <div className="input-group flex flex-col gap-2 w-full">
          <label htmlFor="email">What is your email?</label>
          <input
            type="email"
            id="email"
            required
            placeholder="Enter your email"
            className="p-2 rounded-md border border-gray-500 w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 hover:bg-green-500 w-full text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasswordReset;
