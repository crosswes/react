// * Base
import cn from 'classnames';

// * Components
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import List from '../List/List';

// * Styles
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={cn([styles.header])}>
      <Wrapper className={[styles.wrapper]}>
        <Logo />
        <nav>
          <List />
        </nav>
        <div className={[styles.buttons]}>
          <Button className='orange' text='Sign In' />
          <Button className='white' text='Sign Up' />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
