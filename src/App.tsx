import "./App.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./components/Home";
import CreateItem from "./components/CreateItem";
import NavBar from "./components/NavBar";
import { auth } from "./config/firebase";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <NavBar />
      {user ? (
        <>
          <CreateItem />
        </>
      ) : (
        <><Home/></>
      )}
    </>
  );
}

export default App;
