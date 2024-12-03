import { counterState } from "@recoil/atoms";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

function Right3() {
  useEffect(() => {
    console.log("      # Right3 렌더링.");
  });

  // const [count, setCount] = useRecoilState(counterState);

  // const countUp = (step) => {
  //   setCount(count + step);
  // };
  // const countDown = (step) => {
  //   setCount(count - step);
  // };
  // const countReset = () => {
  //   setCount(0);
  // };

  const setCount = useSetRecoilState(counterState);
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
      <button onClick={() => countDown(1)}>-1</button>
      <button onClick={() => countReset()}>0</button>
      <button onClick={() => countUp(1)}>+1</button>
    </div>
  );
}

export default Right3;