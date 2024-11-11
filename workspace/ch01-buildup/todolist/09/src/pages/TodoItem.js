import koh from "../../../koh.js";

function TodoItem({ item, toggleDone, deleteItem }) {
  return koh.createElement(
    "li",
    { "data-no": item.no },
    koh.createElement("span", null, item.no),
    koh.createElement(
      "span",
      { onclick: () => toggleDone(item.no) },
      item.done ? koh.createElement("s", null, item.title) : item.title
    ),
    koh.createElement("button", { onclick: () => deleteItem(item.no) }, "삭제")
  );
}

export default TodoItem;
