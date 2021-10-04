import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import InputErrMsg from "../utils/InputErrMsg";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { userCardActions } from "../../state";
import { formSwitchActions } from "../../state";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  formControl: {
    minWidth: 200,
  },
  textField: { marginBottom: theme.spacing(2) },
  selectMenu: { minWidth: 200 },
}));

function EditUserCard({ card, onEdit }) {
  const classes = useStyles();
  const { uuid, body, category } = card[0];

  const [close, setClose] = useState(false);
  const [editBody, setEditBody] = useState(body);
  const [editCategory, setEditCategory] = useState(category);

  const [showError, setShowError] = useState(false);
  const errorMsg = "Please write something";
  const { openEditForm } = useSelector((state) => state.formSwitch);

  const dispatch = useDispatch();

  const { editUserCard, getUserCards } = bindActionCreators(
    userCardActions,
    dispatch
  );
  const { editFormSwitch } = bindActionCreators(formSwitchActions, dispatch);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!body || !category) {
      setShowError(true);
    } else {
      editUserCard({ uuid, editBody, editCategory });
      setShowError(false);

      setClose(true);
    }
  };

  const onClose = () => {
    editFormSwitch(openEditForm);
    setClose(false);
    getUserCards();
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Add new post
        </Typography>
        <form
          id="social-card-form"
          className={classes.formControl}
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <TextField
            className={classes.textField}
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
            multiline
            rows={4}
            placeholder="Type something..."
            variant="outlined"
          />
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            className={classes.selectMenu}
            labelId="category-select-label"
            value={editCategory}
            displayEmpty
            onChange={(e) => setEditCategory(e.target.value)}
          >
            <MenuItem value={"Note"}>Note</MenuItem>
            <MenuItem value={"Idea"}>Idea</MenuItem>
            <MenuItem value={"Request"}>Request</MenuItem>
          </Select>
        </form>
      </CardContent>
      <CardActions>
        {showError && (
          <InputErrMsg
            showError={showError}
            setShowError={setShowError}
            errorMsg={errorMsg}
          />
        )}
        <Box justifyContent="flex-center">
          {close ? (
            <Button size="small" color="primary" onClick={() => onClose()}>
              Close
            </Button>
          ) : (
            <Button size="small" color="primary" onClick={() => onEdit()}>
              Cancel
            </Button>
          )}
          <Button
            form="social-card-form"
            type="submit"
            size="small"
            color="primary"
          >
            <SaveIcon />
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

EditUserCard.propTypes = {
  card: PropTypes.array,
  onEdit: PropTypes.func,
};

EditUserCard.defaultProps = {
  card: [{ uuid: "", body: "", category: "" }],
  onEdit: () => {},
};

export default EditUserCard;
