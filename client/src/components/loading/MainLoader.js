import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import LoaderComp from "../../loaders/LoaderComp";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const delaySeconds = 2;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    margin: theme.spacing(16),
  },
}));

const MainLoader = () => {
  const classes = useStyles();

  const [show, setShow] = useState(true);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    let timer = setTimeout(() => setShow(false), delaySeconds * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  if (!show && !isAuthenticated) {
    return <Redirect to="/" />;
  }

  if (!show && isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className={classes.root}>
      <LoaderComp height={200} width={200} />
      <Typography variant="h5" component="div">
        Loading...
      </Typography>
    </div>
  );
};

export default MainLoader;
