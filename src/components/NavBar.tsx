import { useEffect, useState } from "react";
import SignUp from "./SignUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import SignOut from "./SignOut";
import CreateItem from "./CreateItem";

const NavBar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="navbar">
      {user ? (
        <>
          <SignOut />
        
        </>
      ) : (
        <SignUp />
      )}
    </div>
  );
};
export default NavBar;
