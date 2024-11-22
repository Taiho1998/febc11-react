import { useRef, useState } from "react";

function TodoInput({ addItem }) {
  const [title, setTitle] = useState("");

  const titleElem = useRef(null);

  const handleAdd = () => {
    if (title.trim() !== "") {
      addItem(title);

      setTitle("");
      titleElem.current.focus();
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") handleAdd();
  };

  return (
    <div className="todoinput">
      <input
        type="text"
        autoFocus
        onKeyUp={handleKeyUp}
        value={title}
        ref={titleElem}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        추가
      </button>
    </div>
  );
}
export default TodoInput;
