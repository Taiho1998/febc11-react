import { useAtom, useSetAtom } from "jotai";
import { countAtom } from "../jotai/jotai";
import { useEffect } from "react";

function Right3() {
  useEffect(() => {
    console.log("      # Right3 렌더링.");
  });
  // const [count, setCount] = useAtom(countAtom);

  const [setCount] = useSetAtom(countAtom);

  const countUp = (step) => {
    setCount((count) => count + step);
  };
  const countDown = (step) => {
    setCount((count) => count - step);
  };
  const countReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={() => countDown(3)}>-3</button>
      <button onClick={() => countReset()}>0</button>
      <button onClick={() => countUp(2)}>+2</button>
    </div>
  );
}

export default Right3;
