import { useEffect, useReducer, useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

Counter.propTypes = {
  children: PropTypes.string,
};

function Counter({ children = "0" }) {
  const initCount = Number(children);
  const [step, setStep] = useState(1);

  const [count, countDispatch] = useReducer(counterReducer, initCount);

  const handleDown = () => {
    countDispatch({ type: "DOWN", step });
  };
  const handleUp = () => {
    countDispatch({ type: "UP", step });
  };
  const handleReset = (event) => {
    countDispatch({ type: "RESET", step });
  };

  useEffect(() => {
    console.log("setup 함수 호출");
    const timer = setInterval(() => {
      console.log(step, new Date());
    }, 1000);
    return () => {
      console.log(step, "cleanup 함수 호출");
      clearInterval(timer);
    };
  }, [step]);

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input
        id="step"
        type="number"
        style={{ width: "40px" }}
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
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
}

export default Counter;
