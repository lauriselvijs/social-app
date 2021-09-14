import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import DeleteIcon from "@material-ui/icons/Delete";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

function UserCard({ card: { title, text, dateAdded, category }, onDelete }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {text}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" component="p">
          {dateAdded}
        </Typography>
      </CardContent>
      <CardActions>
        <Box justifyContent="flex-center">
          <Button size="small" color="primary">
            <FacebookIcon />
          </Button>
          <Button size="small" color="primary">
            <TwitterIcon />
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
          <Button size="small" color="primary">
            <DeleteIcon onClick={() => onDelete()} />
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

export default UserCard;
