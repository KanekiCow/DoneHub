import { db } from "../config/Firebase";
import {
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth } from "../config/Firebase";

const List = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const GetList = async () => {
      try {
        const user = auth.currentUser;
        const userId = user.uid;
        ///get data from db in "users" where userId from the logged in account is equal to the userId on the database
        const q = query(collection(db, "users"), where("userId", "==", userId));
        const querySnapshot = await getDocs(q);
        ///map each data in to difference object
        const data = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });

        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };

    GetList();
  });

  const removeItem = async (docId) => {
    try {
      await deleteDoc(doc(db, "users", docId));
    } catch (error) {
      console.log(error);
    }
  };

  const formatTime = (timestamp) => {
    if (timestamp) {
      const date = timestamp.toDate();
      const timeString = date.toLocaleTimeString([], { timeStyle: "short" });
      return timeString;
    }
    return "..."; // Return an empty string or a default value when timestamp is null or undefined
  };
  return (
    <div>
      {items.length === 0 ? (
        <p>No data can be found, retrying...</p>
      ) : (
        items.map((user, index) => (
          <div className="ContainerofListContainer" key={index}>
            <div className="IDFK">
              <div className="ListContainer">
                <h1>{user?.first}</h1>
                <button
                  className="CompleteBtn"
                  onClick={() => removeItem(user.id)}
                >
                  Complete
                </button>
              </div>

              <p>Created at: {formatTime(user?.CreatedAt)}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default List;
