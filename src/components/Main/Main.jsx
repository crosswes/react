// * Styles
import styles from "./Main.module.css";

// * Base
import cn from "classnames";
import { useState, useEffect } from "react";

// * Components
import Button from "../Button/Button";
import { getListData } from "../../helpers/get-list-data";

// * Icons
// import Icon from "../Icon/Icon";

const Main = () => {
  // const [count, setCount] = useState(0);
  // const handleIncrease = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };
  // const handleDecrease = () => {
  //   setCount((prevCount) => prevCount - 1);
  // };

  useEffect(() => {
    getListData();
  }, []);

  return (
    <>
      {/* <Button text='Decrease' onClick={handleDecrease} />
      <span className={cn([styles.counter])}>{count}</span>
      <Button text='Increase' onClick={handleIncrease} /> */}

      {/* 
      //* Example of adding icons
      <Icon icon='telegram' />
      <Icon icon='instagram' />
      */}
    </>
  );
};

export default Main;
