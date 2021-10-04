import Link from "@material-ui/core/Link";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    margin: theme.spacing(1),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CssBaseline />
      <Typography className={classes.title} component="h1" variant="h1">
        404 - Not found
      </Typography>
      <Link underline="none" component={RouterLink} to="/" variant="body1">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
