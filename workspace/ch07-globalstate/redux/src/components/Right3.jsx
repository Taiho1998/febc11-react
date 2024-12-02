// import counterActionCreator from "@redux/counterActionCreator"; // redux
import { countDown, countReset, countUp } from "@redux-toolkit/counterSlice"; // redux - toolkit
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Right3() {
  useEffect(() => {
    console.log("      # Right3 렌더링.");
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h3>Right3</h3>
      {/*redux ver*/}
      {/* <button onClick={() => dispatch(counterActionCreator.countDown(1))}>
        -1
      </button>
      <button onClick={() => dispatch(counterActionCreator.countReset())}>
        0
      </button>
      <button onClick={() => dispatch(counterActionCreator.countUp(1))}>
        +1
      </button> */}
      {/* redux - toolkit */}
      <button onClick={() => dispatch(countDown(1))}>-1</button>
      <button onClick={() => dispatch(countReset())}>0</button>
      <button onClick={() => dispatch(countUp(2))}>+2</button>
    </div>
  );
}

export default Right3;
