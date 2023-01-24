import styles from "./Input.module.scss";

export const Input = ({
  label,
  type,
  id,
  value,
  onChange,
  placeholder,
  name,
}) => {
  return (
    <div className={styles.input}>
      <label className="visually-hidden" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  );
};
