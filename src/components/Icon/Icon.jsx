import ICONS from './Icon.data';
import cn from 'classnames';
import styles from './Icon.module.css';

const Icon = ({ className = [], icon }) => {
  return (
    <svg className={cn([styles.icon, ...className])} viewBox='0 0 24 24'>
      [ICONS[icon]]
    </svg>
  );
};

export default Icon;
