import { useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

Counter.propTypes = {
  children: PropTypes.string,
};

function Counter({ children = "0" }) {
  const initCount = Number(children);
  const [count, setCount] = useState(initCount);
  const [step, setStep] = useState(1);

  const handleDown = () => {
    setCount(count - step);
  };
  const handleUp = () => {
    console.log(typeof step);
    setCount(count + step);
  };
  const handleReset = (event) => {
    setCount(initCount);
  };
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

export default Counter;
