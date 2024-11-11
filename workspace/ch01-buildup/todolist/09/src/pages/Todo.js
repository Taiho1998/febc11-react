import koh from "../../../koh.js";
import TodoInput from "./TodoInput.js";
import TodoList from "./TodoList.js";

function Todo(props) {
  return koh.createElement(
    "div",
    { id: "main" },
    koh.createElement(
      "div",
      { id: "container" },
      koh.createElement(
        "ul",
        null,
        koh.createElement(
          "li",
          null,
          koh.createElement("h2", null, "쇼핑 목록"),
          TodoInput({
            handleAdd: props.handleAdd,
            handleAddKeyup: props.handleAddKeyup,
          }),
          TodoList({
            itemList: props.itemList,
            toggleDone: props.toggleDone,
            deleteItem: props.deleteItem,
          })
        )
      )
    )
  );
}

export default Todo;
