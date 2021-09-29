import Loader from "react-loader-spinner";
import PropTypes from "prop-types";

// Loader component handles screen loading look
const LoaderComp = () => {
  return (
    <Loader
      type="TailSpin"
      color="rgb(233, 236, 239)"
      height={70}
      width={70}
      timeout={null}
    />
  );
};

LoaderComp.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  timeout: PropTypes.number,
};

LoaderComp.defaultProps = {
  type: "TailSpin",
  color: "rgb(233, 236, 239)",
  height: 70,
  width: 70,
  timeout: null,
};

export default LoaderComp;
