import PropTypes from "prop-types";
Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["blue", "red", "yellow", "black", "white"]),
  bg: PropTypes.oneOf(["blue", "red", "yellow", "gray"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
export default function Button({
  children,
  color = "black",
  bg = "gray",
  size = "md",
  ...rest
}) {
  let btnColor = {
    gray: `bg-gray-400`,
    blue: `bg-blue-500`,
    red: `bg-red-500`,
    yellow: `bg-yellow-500`,
  };
  let textColor = {
    black: "text-black",
    white: "text-white",
    blue: "text-blue-500",
    red: "text-red-500",
  };
  let btnSize = {
    sm: `py-1 px-2 text-sm`,
    md: `py-2 px-4 text-base`,
    lg: `py-2 px-6 text-lg`,
  };
  return (
    <button
      className={`${btnColor[bg]} ${textColor[[color]]} ${
        btnSize[size]
      } m-1 rounded-md`}
      {...rest}
    >
      {children}
    </button>
  );
}
