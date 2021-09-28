import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import IconButton from "@material-ui/core/IconButton";
import { Link as RouterLink } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { authActions, userCardActions } from "../../state";

const Logout = () => {
  const dispatch = useDispatch();

  const { logout } = bindActionCreators(authActions, dispatch);
  const { clearState } = bindActionCreators(userCardActions, dispatch);

  const handleOnClickLogout = () => {
    logout();
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
