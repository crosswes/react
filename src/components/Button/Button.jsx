import styles from '../Button/Button.module.css';
import cn from 'classnames';

const Button = ({
  text = 'Empty button',
  className = [],
  type = 'button',
  onClick,
}) => {
  return (
    <button type={type} className={cn(styles[className])} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
