import '/Logo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src="/Logo.svg" alt="logo" />
        <nav>
          <ul className={styles.list}>
            <li className={styles.orange}>Product</li>
            <li>Customers</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </nav>
        <div className={styles.buttons}>
          <button type="button" className={`${styles.button} ${styles.white}`}>
            <span>Sign In</span>
          </button>
          <button type="button" className={`${styles.button} ${styles.orange}`}>
            <span>Sign Up</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
