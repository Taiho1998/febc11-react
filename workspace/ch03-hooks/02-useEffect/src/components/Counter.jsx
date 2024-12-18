import { useEffect, useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

Counter.propTypes = {
  children: PropTypes.string,
};

function Counter({ children = "0" }) {
  const initCount = Number(children);

  const [step, setStep] = useState(1);

  const [count, setCount] = useState(initCount);

  const handleDown = () => {
    setCount(count - step);
  };
  const handleUp = () => {
    setCount(count + step);
  };
  const handleReset = (event) => {
    setCount(initCount);
  };

  // 1초 후에 자동으로 값 한 번 증가
  // "무량공처"
  // setTimeout(() => {
  //   handleUp();
  // }, 1000);

  // 마운트 된 후에 최초 한 번만 값 증가
  // useEffect(() => {
  //   setTimeout(() => {
  //     handleUp();
  //   }, 1000);
  // }, [step]);

  // useEffect(() => {
  //   console.log("setup 함수 호출");
  //   setInterval(() => {
  //     console.log(new Date());
  //   }, 1000);
  // }, [step]);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(step, new Date());
    }, 1000);
    return () => {
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

function counterReducer(state, action) {}

export default Counter;
