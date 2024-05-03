// * Styles
import styles from "./Counter.module.css";
import cn from "classnames";

// * Hooks
import { useState } from "react";

// * Components
import Button from "../Button/Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <>
      <Button text='Decrease' onClick={handleDecrease} />
      <span className={cn([styles.counter])}>{count}</span>
      <Button text='Increase' onClick={handleIncrease} />
    </>
  );
};

export default Counter;
