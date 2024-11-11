import koh from "../../../koh.js";
import TodoItem from "./TodoItem.js";

function TodoList({ itemList, toggleDone, deleteItem }) {
  const list = itemList.map((item) =>
    TodoItem({
      item,
      toggleDone,
      deleteItem,
    })
  );
  return koh.createElement("ul", { class: "todolist" }, list);
}

export default TodoList;
