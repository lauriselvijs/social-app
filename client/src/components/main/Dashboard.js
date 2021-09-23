import { useState } from "react";
import clsx from "clsx";
import { makeStyles, alpha } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleIcon from "@material-ui/icons/People";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import AddIcon from "@material-ui/icons/Add";
import { mainListItems } from "./listItems";
import UserCards from "./UserCards";
import SocialCardForm from "./SocialCardForm";
import CancelIcon from "@material-ui/icons/Cancel";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Loader from "../../loaders/loader";

import { authActions } from "../../state";
import { formSwitchActions } from "../../state";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
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
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  gridItems: {
    marginTop: theme.spacing(1),
  },
  loader: {
    margin: theme.spacing(16),
    marginLeft: theme.spacing(16),
  },
}));

function Dashboard({ copyright }) {
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(true);

  const { user, isLoading } = useSelector((state) => state.auth);
  const { openForm } = useSelector((state) => state.formSwitch);

  const dispatch = useDispatch();

  const { logout } = bindActionCreators(authActions, dispatch);
  const { formSwitch } = bindActionCreators(formSwitchActions, dispatch);

  const handleDrawerOpen = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleFormOpen = () => {
    formSwitch(openForm);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, openDrawer && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              openDrawer && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Social Hub
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <IconButton color="inherit">
            <Badge color="secondary">
              {!openForm ? (
                <AddIcon onClick={handleFormOpen} />
              ) : (
                <CancelIcon color="error" onClick={handleFormOpen} />
              )}
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <PeopleIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge color="secondary">
              <SettingsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" component={RouterLink} to="/my-account">
            <Badge color="secondary">
              <AccountCircleIcon fontSize="large" />
            </Badge>
          </IconButton>
          {user.email}
          <IconButton
            color="inherit"
            component={RouterLink}
            to="/"
            onClick={() => logout()}
          >
            <Badge color="secondary">
              <ExitToAppIcon fontSize="large" />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(
            classes.drawerPaper,
            !openDrawer && classes.drawerPaperClose
          ),
        }}
        open={openDrawer}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerOpen}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer>
      <main className={classes.content}>
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
                <IconButton color="inherit">
                  <Badge color="secondary">
                    <CalendarTodayIcon />
                  </Badge>
                </IconButton>
                <IconButton color="inherit">
                  <Badge color="secondary">
                    <SortByAlphaIcon />
                  </Badge>
                </IconButton>
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
          <Box pt={4}>{copyright}</Box>
        </Container>
      </main>
    </div>
  );
}

export default Dashboard;
