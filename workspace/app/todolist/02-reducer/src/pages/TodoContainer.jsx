import Todo from "@pages/Todo";
import { produce } from "immer";
import { useState } from "react";

function TodoContainer() {
  const sampleItemList = [
    { _id: 1, title: "두부", done: true },
    { _id: 2, title: "계란", done: false },
    { _id: 3, title: "라면", done: true },
  ];
  const [itemList, setItemList] = useState(sampleItemList);

  const addItem = (item) => {
    const newItemList = [...itemList, item];
    setItemList(newItemList);
  };

  const toggleDone = (_id) => {
    const newItemList = produce(itemList, (draft) => {
      const item = draft.find((item) => item._id === _id);
      item.done = !item.done;
    });

    setItemList(newItemList);
  };

  const deleteItem = (_id) => {
    const newItemList = itemList.filter((item) => item._id !== _id);
    setItemList(newItemList);
  };

  return (
    <Todo
      itemList={itemList}
      addItem={addItem}
      toggleDone={toggleDone}
      deleteItem={deleteItem}
    />
  );
}

export default TodoContainer;
