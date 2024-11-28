import PropTypes from "prop-types";
import { createContext, useState } from "react";

const CounterContext = createContext();

CounterProvider.propTypes = {
  children: PropTypes.node,
};

export function CounterProvider({ children }) {
  const [count, setCount] = useState(10);

  const countUp = function (step) {
    setCount(count + step);
  };
  const reset = function () {
    setCount(0);
  };
  const countDown = function (step) {
    setCount(count - step);
  };

  const values = {
    states: { count },
    actions: { countDown, reset, countUp },
  };
  return (
    <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
  );
}

/* <CounterProvider>
    <App/>
</CounterProvider> */

{
  /* <CounterContext.Provider value={values}>
    <App />
</CounterContext.Provider> */
}

export default CounterContext;
