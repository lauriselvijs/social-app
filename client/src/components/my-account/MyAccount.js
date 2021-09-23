import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Loader from "../../loaders/loader";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    margin: theme.spacing(4),
  },
  appBarSpacer: theme.mixins.toolbar,

  text: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(4),
  },
  button: { margin: theme.spacing(2), marginLeft: theme.spacing(6) },
  loader: {
    margin: theme.spacing(16),
    marginLeft: theme.spacing(16),
  },
}));

function MyAccount() {
  const classes = useStyles();

  const [name, setName] = useState(false);
  const { user, isLoading } = useSelector((state) => state.auth);
  const userName = user.first_name + " " + user.last_name;

  useEffect(() => {
    user !== null ? setName(true) : setName(false);
  }, [user]);

  return (
    <div className={classes.root}>
      <div className={classes.appBarSpacer} />
      {isLoading ? (
        <div className={classes.loader} variant="h4">
          <Loader />
        </div>
      ) : (
        <>
          <CssBaseline />
          <Typography className={classes.title} variant="h4">
            My Account
          </Typography>
          <Typography className={classes.text} variant="h5">
            Name: {name && userName}
          </Typography>
          <Typography className={classes.text} variant="h5">
            Email: {user.email}
          </Typography>
          <Button
            className={classes.button}
            component={RouterLink}
            to="/dashboard"
            variant="contained"
            color="primary"
          >
            Go Back
          </Button>
        </>
      )}
    </div>
  );
}

export default MyAccount;
