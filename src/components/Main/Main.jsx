// * Styles
import styles from "./Main.module.css";

// * Base
import cn from "classnames";
import { useState, useEffect } from "react";

// * Components
import { getListData } from "../../helpers/get-list-data";
import Wrapper from "../Wrapper/Wrapper";
import Button from "../Button/Button";
import Banner from "../Banner/Banner";
import Logo from "../Logo/Logo";

// * Icons
// import Icon from "../Icon/Icon";

const Main = () => {
  // useEffect(() => {
  //   getListData();
  // }, []);

  return (
    <>
      <Wrapper className={styles.wrapper}>
        <section className='flex justify-between items-center'>
          <div>
            <h2 className='text-3xl font-bold'>
              The Design Thinking superpowers
            </h2>
            <p className={cn([styles.text])}>
              Tools, tutorials, design and innovation experts, all in one place!
              The most intuitive way to imagine your next user experience.
            </p>
            <Button text='Get started' className={(styles.button, "orange")} />
          </div>
          <Banner />
        </section>
      </Wrapper>
      {/* 
      //* Example of adding icons
      <Icon icon='telegram' />
      <Icon icon='instagram' />
      */}
    </>
  );
};

export default Main;
