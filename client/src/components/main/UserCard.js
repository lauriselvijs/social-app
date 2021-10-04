import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import Box from "@material-ui/core/Box";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

function UserCard({
  card: { user, body, createdAt, category },
  onDelete,
  onEdit,
}) {
  const classes = useStyles();

  const { user: currentUser } = useSelector((state) => state.auth);

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
            <Button size="small" color="primary" onClick={() => onEdit()}>
              Edit
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

UserCard.propTypes = {
  card: PropTypes.array,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

UserCard.defaultProps = {
  card: {
    user: { uuid: "", first_name: "", last_name: "", email: "" },
    body: "",
    category: "",
    createdAt: "",
  },
  onEdit: () => {},
  onDelete: () => {},
};

export default UserCard;
