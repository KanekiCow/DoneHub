import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../config/Firebase";

const provider = new GoogleAuthProvider();
const SignUp = () => {
  const signUp_ = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful sign-up
        console.log("Sign-up successful:", result);
      })
      .catch((error) => {
        // Handle errors during sign-up
        console.error(error);
      });
  };

  return (
    <>
      <div>
        <button className="TopRight" onClick={signUp_}>
          SignUp
        </button>
      </div>
    </>
  );
};

export default SignUp;
