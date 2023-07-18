import { useEffect, useState } from "react";
import SignUp from "./SignUp";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";
import SignOut from "./SignOut";
import { User } from "firebase/auth";
import { app } from "../config/Firebase";
const auth = getAuth(app);
const NavBar = () => {
  const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return <div className="navbar">{user ? <SignOut /> : <SignUp />}</div>;
};

export default NavBar;
