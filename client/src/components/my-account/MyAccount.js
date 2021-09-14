import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";

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
}));

function MyAccount() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.appBarSpacer} />
      <CssBaseline />
      <Typography className={classes.title} variant="h4">
        My Account
      </Typography>
      <Typography className={classes.text} variant="h5">
        Name: John Doe
      </Typography>
      <Typography className={classes.text} variant="h5">
        Email: John@gmail.com
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
    </div>
  );
}

export default MyAccount;
