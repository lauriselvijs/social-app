import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import UserCards from "./UserCards";
import SocialCardForm from "./SocialCardForm";
import { useSelector } from "react-redux";
import Loader from "../../loaders/LoaderComp";
import SortByDateBtn from "./SortByDateBtn";
import Copyright from "../utils/Copyright";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  gridItems: {
    marginTop: theme.spacing(1),
  },
  loader: {
    margin: theme.spacing(16),
    marginLeft: theme.spacing(16),
  },
}));

const CardDisplayArea = ({ copyright }) => {
  const classes = useStyles();

  const { isLoading } = useSelector((state) => state.auth);
  const { openForm } = useSelector((state) => state.formSwitch);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      console.log("test");
    }
  };

  return (
    <main className={classes.content} onScroll={handleScroll}>
      <div className={classes.appBarSpacer} />

      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item sm={6} md={8} lg={10}></Grid>
          <Grid item sm={6} md={4} lg={2}>
            <Box
              textAlign="right"
              flexDirection="row"
              justifyContent="flex-end"
            >
              <SortByDateBtn />
            </Box>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={3} className={classes.gridItems}>
          {openForm && (
            <Grid item xs={12} md={4} lg={3}>
              <SocialCardForm />
            </Grid>
          )}
        </Grid>
        {isLoading ? (
          <div className={classes.loader} variant="h4">
            <Loader />
          </div>
        ) : (
          <>
            <UserCards />
          </>
        )}
        <Copyright />
      </Container>
    </main>
  );
};

export default CardDisplayArea;
