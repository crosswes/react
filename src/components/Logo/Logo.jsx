// * Img
import "../../../public/Logo.svg";

// * Styles
import styles from "./Logo.module.css";

const Logo = () => {
  return <img className={styles.logo} src='/Logo.svg' alt='logo' />;
};

export default Logo;
