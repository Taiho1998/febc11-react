import koh from "../koh.js";

function Counter() {
  // let count = 0;
  const [count, setCount] = koh.useState(10);

  const handleDown = () => {
    setCount(count - 1);
  };
  const handleUp = () => {
    setCount(count + 1);
  };
  const handleReset = (event) => {
    setCount(0);
  };

  return koh.createElement(
    "div",
    { id: "counter" },
    koh.createElement("button", { type: "button", onclick: handleDown }, "-"),
    koh.createElement(
      "button",
      { type: "button", onclick: (event) => handleReset(event) },
      0
    ),
    koh.createElement("button", { type: "button", onclick: handleUp }, "+"),
    koh.createElement("span", null, count)
  );
}

export default Counter;
