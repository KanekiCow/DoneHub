import "./App.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./components/Home";
import CreateItem from "./components/CreateItem";
import NavBar from "./components/NavBar";
import { auth } from "./config/Firebase";
import { User as FirebaseUser } from "firebase/auth";

interface User extends FirebaseUser {
 
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser: FirebaseUser | null) => {
        setUser(currentUser as User | null);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <>
      <NavBar />
      {user ? <CreateItem /> : <Home />}
    </>
  );
}

export default App;
