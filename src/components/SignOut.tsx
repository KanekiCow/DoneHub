import { auth } from "../config/Firebase";

const SignOut = () => {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        // Successful sign-out
        console.log("User signed out successfully.");
      })
      .catch((error) => {
        // Error occurred during sign-out
        console.error("Error signing out:", error);
      });
  };

  return (
    <>
      <div>
        <button className="TopRight" onClick={handleSignOut}>SignOut</button>
      </div>
    </>
  );
};

export default SignOut;
