// * Styles
import styles from "./Input.module.css";

const Input = ({
  type = "text",
  placeholder,
  onChange,
  onBlur,
  value,
  title,
  error,
  name,
}) => {
  const showError = type !== "radio" || (type !== "select" && error);
  const errorStyle =
    error === "We'll never share your email with anyone else."
      ? styles.privacyMessage
      : styles.error;

  return (
    <>
      <label className={styles.label}>
        {title && <div className={styles.title}>{title}</div>}
        <input
          className={styles.input}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          type={type}
        />
        {showError && <div className={errorStyle}>{error}</div>}
      </label>
    </>
  );
};

export default Input;

// * type rafce to create a react arrow function component(new extension)
