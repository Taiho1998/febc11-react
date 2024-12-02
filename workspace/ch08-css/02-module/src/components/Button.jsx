import PropTypes from "prop-types";
import styles from "./Button.module.css";
import classNames from "classnames";
Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["blue", "red", "yellow"]),
  bg: PropTypes.oneOf(["blue", "red", "yellow", "gray"]),
};

export default function Button({
  children,
  type = "button",
  onClick: clickHandler,
  color,
  bg,
}) {
  // const colorStyle = `${styles.button} ${styles[`color-${bg}-${color}`]}`;
  const colorStyle = classNames(styles.button, styles[`color-${bg}-${color}`]);
  return (
    <button className={colorStyle} type={type} onClick={clickHandler}>
      {children}
    </button>
  );
}
