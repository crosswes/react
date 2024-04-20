// * Styles
import styles from './Main.module.css';

// * Base
import cn from 'classnames';
import { useState, useCallback, useEffect } from 'react';

// * Components
import Button from '../Button/Button';
import { getListData } from '../../helpers/get-list-data';

const Main = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    getListData();
  }, []);

  return (
    <>
      <Button text='Decrease' onClick={handleDecrease} />
      <span className={cn([styles.counter])}>{count}</span>
      <Button text='Increase' onClick={handleIncrease} />
    </>
  );
};

export default Main;
