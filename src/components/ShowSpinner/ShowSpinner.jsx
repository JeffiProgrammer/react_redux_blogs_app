import PropsType from "prop-types";

const ShowSpinner = ({ text = "", size = "7em" }) => {
  const header = text ? <h4>{text}</h4> : null;

  return (
    <div className="spinner">
      {header}
      <div className="loader" style={{ width: size, height: size }}></div>
    </div>
  );
};


ShowSpinner.propTypes = {
  text: PropsType.string,
  size: PropsType.string,
};

export default ShowSpinner;
