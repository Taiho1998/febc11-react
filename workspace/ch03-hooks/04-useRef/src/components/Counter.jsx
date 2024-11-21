import { useEffect, useReducer, useRef } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

Counter.propTypes = {
  children: PropTypes.string,
};

function Counter({ children = "0" }) {
  const initCount = Number(children);
  // const [step, setStep] = useState(1);
  const step = useRef(1);
  const stepElem = useRef(null);

  const [count, countDispatch] = useReducer(counterReducer, initCount);

  const handleDown = () => {
    countDispatch({ type: "DOWN", value: step.current });
  };
  const handleUp = () => {
    countDispatch({ type: "UP", value: step.current });
  };
  const handleReset = (event) => {
    countDispatch({ type: "RESET", value: initCount });
    // const stepElem = document.querySelector("#step");
    stepElem.current.focus();
  };

  // useEffect(() => {
  //   console.log("setup 함수 호출");
  //   const timer = setInterval(() => {
  //     console.log(step, new Date());
  //   }, 1000);
  //   return () => {
  //     console.log(step, "cleanup 함수 호출");
  //     clearInterval(timer);
  //   };
  // }, [step]);

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input
        id="step"
        type="number"
        style={{ width: "40px" }}
        defaultValue={step.current}
        ref={stepElem}
        onChange={(e) => (step.current = Number(e.target.value))}
      />
      <Button color="red" type="button" onClick={handleDown}>
        -
      </Button>
      <Button type="button" onClick={handleReset}>
        {initCount}
      </Button>
      <Button color="blue" type="button" onClick={handleUp}>
        +
      </Button>
      <span>{count}</span>
    </div>
  );
}

function counterReducer(state, action) {
  //{5, { type: 'DOWN', value: 3 }}
  let newState;

  switch (action.type) {
    case "DOWN":
      newState = state - action.value;
      break;
    case "UP":
      newState = state + action.value;
      break;
    case "RESET":
      newState = action.value;
      break;
    default:
      newState = state;
  }
  return newState;
}

export default Counter;
