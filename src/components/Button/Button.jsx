import styles from "../Button/Button.module.css";
import cn from "classnames";

const Button = ({
  text = "Empty button",
  className = [],
  type = "button",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={cn(styles[className])}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
