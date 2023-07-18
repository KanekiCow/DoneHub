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

interface Item {
  id: string;
  // Add other properties as per your data structure
}

const List = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const GetList = async () => {
      try {
        const user = auth.currentUser;

        if (user) {
          const userId = user.uid;
          const q = query(
            collection(db, "users"),
            where("userId", "==", userId)
          );
          const querySnapshot = await getDocs(q);
          const data = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() } as Item;
          });

          setItems(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    GetList();
  });

  const removeItem = async (docId: string) => {
    try {
      await deleteDoc(doc(db, "users", docId));
    } catch (error) {
      console.log(error);
    }
  };

  const formatTime = (timestamp: any) => {
    if (timestamp) {
      const date = timestamp.toDate();
      const timeString = date.toLocaleTimeString([], { timeStyle: "short" });
      return timeString;
    }
    return "...";
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
