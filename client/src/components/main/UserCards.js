import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { userCardActions } from "../../state";
import UserCard from "./UserCard";
import { makeStyles } from "@material-ui/core/styles";

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
  const { getUserCards, deleteUserCard, clearState } = bindActionCreators(
    userCardActions,
    dispatch
  );

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    isAuthenticated ? getUserCards() : clearState();
  }, [isAuthenticated]);

  return (
    <div className={classes.container}>
      {cards.map((card, index) => (
        <div style={{ gridColumnEnd: "span 4" }} key={index}>
          <UserCard card={card} onDelete={() => deleteUserCard(card.uuid)} />
        </div>
      ))}
    </div>
  );
};

export default UserCards;
