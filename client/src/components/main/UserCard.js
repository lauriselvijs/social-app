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

function UserCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Title
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
          doloremque impedit quo ad eos quasi quia hic nobis ea iure.
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" component="p">
          Date added: 12-24-2021
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
            <DeleteIcon />
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

export default UserCard;
