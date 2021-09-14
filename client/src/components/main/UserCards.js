import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { userCardActions } from "../../state";
import UserCard from "./UserCard";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
    padding: theme.spacing(3),
  },
}));

const UserCards = () => {
  const classes = useStyles();

  const cards = useSelector((state) => state.card.cards);
  const dispatch = useDispatch();

  const { deleteUserCard, clearState } = bindActionCreators(
    userCardActions,
    dispatch
  );

  /*

     {" "}
      {cards.map((card) => (
          <UserCard
            key={card.id}
            card={card}
            onDelete={() => deleteUserCard(card.id)}
          />
      ))}
  */
  return (
    <div className={classes.container}>
      {cards.map((card) => (
        <div style={{ gridColumnEnd: "span 4" }}>
          <UserCard
            key={card.id}
            card={card}
            onDelete={() => deleteUserCard(card.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default UserCards;
