import { auth, db } from "../config/Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import List from "./List";

const CreateItem = () => {
  const [inputValue, setInputValue] = useState("");
  const time = serverTimestamp();

  const handleAddData = async () => {
    try {
      const user = auth.currentUser;
      const userId = user.uid;
      if (inputValue.length > 2) {
        const docRef = await addDoc(collection(db, "users"), {
          first: inputValue,
          userId: userId,
          CreatedAt: time,
        });
        console.log("Document written with ID: ", docRef.id);
      } else {
        console.error("Not enough char");
      }
      return;
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="CreateContainer">
        <input
          required={true}
          placeholder="Job To Do Here..."
          className="Input_"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="addBtn" onClick={handleAddData}>
          Add To List
        </button>
        <List />
      </div>
    </>
  );
};
export default CreateItem;
