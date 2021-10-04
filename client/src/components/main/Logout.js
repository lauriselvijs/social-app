import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import IconButton from "@material-ui/core/IconButton";
import { Link as RouterLink } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { authActions, userCardActions, errorActions } from "../../state";

const Logout = () => {
  const dispatch = useDispatch();

  const { logout } = bindActionCreators(authActions, dispatch);
  const { clearState } = bindActionCreators(userCardActions, dispatch);
  const { clearErrors } = bindActionCreators(errorActions, dispatch);

  const handleOnClickLogout = () => {
    logout();
    clearErrors();
    clearState();
  };

  return (
    <IconButton
      color="inherit"
      component={RouterLink}
      to="/"
      onClick={() => handleOnClickLogout()}
    >
      <Badge color="secondary">
        <ExitToAppIcon fontSize="large" />
      </Badge>
    </IconButton>
  );
};

export default Logout;
