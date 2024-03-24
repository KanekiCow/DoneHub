import { auth, db } from "../config/Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState, ChangeEvent } from "react";
import List from "./List";

const CreateItem = () => {
  const [inputValue, setInputValue] = useState("");
  const time = serverTimestamp();

  const handleAddData = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        if (inputValue.length > 2 && inputValue.length < 64) {
          const docRef = await addDoc(collection(db, "users"), {
            first: inputValue,
            userId: userId,
            CreatedAt: time,
          });
          console.log("Document written with ID: ", docRef.id);
        } else {
          console.error("Not enough characters");
        }
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleButtonClick = async () => {
    await handleAddData().catch((error) => {
      console.error("Unhandled promise rejection: ", error);
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="CreateContainer">
        <div className="button-container">
          <input
            required={true}
            placeholder="Job To Do Here..."
            className="Input_"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="addBtn" onClick={handleButtonClick}>
            Add To List
          </button>
        </div>
        <div className="balls-container">
          <List />
        </div>
      </div>
    </>
  );
};

export default CreateItem;
