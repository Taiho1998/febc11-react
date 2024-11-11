import koh from "../../../koh.js";

function TodoInput({ handleAdd, handleAddKeyup }) {
  return koh.createElement(
    "div",
    { class: "todoinput" },
    koh.createElement("input", {
      type: "text",
      autofocus: "",
      onkeyup: (event) => handleAddKeyup(event),
    }),
    koh.createElement("button", { type: "button", onclick: handleAdd }, "추가")
  );
}

export default TodoInput;
