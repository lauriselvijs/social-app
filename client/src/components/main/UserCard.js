import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import Box from "@material-ui/core/Box";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { formSwitchActions } from "../../state";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

function UserCard({ card: { user, body, createdAt, category }, onDelete }) {
  const classes = useStyles();

  const { openForm } = useSelector((state) => state.formSwitch);
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { formSwitch } = bindActionCreators(formSwitchActions, dispatch);

  const handleFormOpen = () => {
    formSwitch(openForm);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {category}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {body}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" component="p">
          <Moment format="YYYY-MM-DD HH:mm:ss">{createdAt}</Moment>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {user ? user.first_name + " " + user.last_name : ""}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {user ? user.email : ""}
        </Typography>
      </CardContent>
      {currentUser.uuid === user.uuid && (
        <CardActions>
          <Box justifyContent="flex-center">
            <Button
              size="small"
              color="primary"
              onClick={() => handleFormOpen()}
            >
              {!openForm ? "Edit" : "Cancel"}
            </Button>
            <Button size="small" color="primary">
              <DeleteIcon onClick={() => onDelete()} />
            </Button>
          </Box>
        </CardActions>
      )}
    </Card>
  );
}

export default UserCard;
