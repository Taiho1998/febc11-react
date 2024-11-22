import PropTypes from "prop-types";

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};

function Link({ children, to }) {
  const handleClick = (e) => {
    e.preventDefault();
    window.history.pushState(null, "", e.target.pathname);
  };
  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
