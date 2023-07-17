import { auth, provider } from "../config/Firebase";
import { signInWithPopup } from "firebase/auth";

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
