import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { userCardActions, pageActions } from "../../state";
import UserCard from "./UserCard";
import { makeStyles } from "@material-ui/core/styles";

import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

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

  const [counter, setCounter] = useState(1);
  const { page } = useSelector((state) => state.page);
  const { setPage, setPageForward, setPageBackward } = bindActionCreators(
    pageActions,
    dispatch
  );

  const handleButtonPlus = () => {
    setPageForward();
  };

  const handleButtonMinus = () => {
    setPageBackward();
  };

  //console.log(page);
  console.log("page", page);

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
