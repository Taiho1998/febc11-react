import { useState } from "react";
import Todo from "./pages/Todo";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return function App() {
    const [itemList, setItemList] = useState([
      { _id: 1, title: "두부", done: true },
      { _id: 2, title: "계란", done: false },
      { _id: 3, title: "라면", done: true },
    ]);

    const addItem = (item) => {
      const newItemList = [...itemList, item];
      setItemList(newItemList);
    };

    return (
      <div id="todo">
        <Header />
        <Todo itemList={itemList} addItem={addItem} />
        <Footer />
      </div>
    );
  };
}

export default App;
