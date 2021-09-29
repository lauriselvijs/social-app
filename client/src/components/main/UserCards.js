import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { userCardActions, pageActions } from "../../state";
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
  const { deleteUserCard } = bindActionCreators(userCardActions, dispatch);
  const { setPageForward, setPageBackward } = bindActionCreators(
    pageActions,
    dispatch
  );

  //const scrollY = useScrollPosition(30 /*fps*/);
  /*

  useEffect(() => {
    if (scrollY === 12) {
      // setBottom(true);
      // setPageForward();
      console.log("Bottom");
    } else {
      setBottom(false);
    }
    //isAuthenticated ? getUserCards() : clearState();
  }, [scrollY]);

  */

  const handleButtonPlus = () => {
    setPageForward();
  };

  const handleButtonMinus = () => {
    setPageBackward();
  };

  //console.log("scrollY", scrollY);
  //console.log("bottom", bottom);

  return (
    <div className={classes.container}>
      {cards.map((card, index) => (
        <div style={{ gridColumnEnd: "span 4" }} key={index}>
          <UserCard card={card} onDelete={() => deleteUserCard(card.uuid)} />
        </div>
      ))}
      <button onClick={handleButtonPlus}>Plus</button>
      <button onClick={handleButtonMinus}>Minus</button>
    </div>
  );
};

export default UserCards;
