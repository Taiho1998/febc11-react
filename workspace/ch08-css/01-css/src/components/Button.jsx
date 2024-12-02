import PropTypes from "prop-types";
import "./Button.css";
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
  return (
    <button
      className={`button color-${bg}-${color}`}
      type={type}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
