import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import InputErrMsg from "./InputErrMsg";

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

function SocialCardForm() {
  const classes = useStyles();
  const [category, setCategory] = useState("Note");
  const [textBoxText, setTextBoxText] = useState();
  const [savePost, setSavePost] = useState(false);
  const [showError, setShowError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!textBoxText || !category) {
      setShowError(true);
    } else {
      console.log("Text added");
      setCategory("Note");
      setTextBoxText("");
      setShowError(false);
    }
  };

  const handleSave = () => {
    setSavePost(!savePost);
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
            value={textBoxText}
            onChange={(e) => setTextBoxText(e.target.value)}
            multiline
            rows={4}
            placeholder="Type something..."
            variant="outlined"
          />
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            className={classes.selectMenu}
            labelId="category-select-label"
            value={category}
            displayEmpty
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value={"Note"}>Note</MenuItem>
            <MenuItem value={"Idea"}>Idea</MenuItem>
            <MenuItem value={"Request"}>Request</MenuItem>
          </Select>
        </form>
      </CardContent>
      <CardActions>
        {showError && (
          <InputErrMsg showError={showError} setShowError={setShowError} />
        )}
        <Box justifyContent="flex-center">
          <Button
            form="social-card-form"
            type="submit"
            size="small"
            color="primary"
          >
            <SaveIcon onClick={handleSave} />
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

export default SocialCardForm;
