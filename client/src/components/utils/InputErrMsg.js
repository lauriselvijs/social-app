import React from "react";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";

function InputErrMsg({ errorMsg, showError, setShowError }) {
  return (
    <Collapse in={showError}>
      <Alert
        severity="info"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => setShowError()}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {errorMsg}
      </Alert>
    </Collapse>
  );
}

InputErrMsg.propTypes = {
  showError: PropTypes.bool,
  setShowError: PropTypes.func,
};

InputErrMsg.defaultProps = {
  showError: false,
};

export default InputErrMsg;
