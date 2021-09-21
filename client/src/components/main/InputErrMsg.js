import React from "react";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";

function InputErrMsg({ showError, setShowError }) {
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
        Please write something
      </Alert>
    </Collapse>
  );
}

export default InputErrMsg;
