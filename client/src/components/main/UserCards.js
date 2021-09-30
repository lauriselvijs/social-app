import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { userCardActions, pageActions, formSwitchActions } from "../../state";
import UserCard from "./UserCard";
import { makeStyles } from "@material-ui/core/styles";
import EditUserCard from "./EditUserCard";

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

  const [editCard, setEditCard] = useState();
  const { openEditForm } = useSelector((state) => state.formSwitch);
  const cards = useSelector((state) => state.card.cards);
  const dispatch = useDispatch();
  const { deleteUserCard } = bindActionCreators(userCardActions, dispatch);
  const { setPageForward, setPageBackward } = bindActionCreators(
    pageActions,
    dispatch
  );

  const { editFormSwitch } = bindActionCreators(formSwitchActions, dispatch);

  const handleButtonPlus = () => {
    setPageForward();
  };

  const handleButtonMinus = () => {
    setPageBackward();
  };

  const showEditUserCard = (uuid) => {
    editFormSwitch(openEditForm);
    setEditCard(cards.filter((card) => card.uuid === uuid));
  };

  const hideEditUserCard = () => {
    editFormSwitch(openEditForm);
  };

  //console.log("openEditForm", openEditForm);
  //console.log("editCard", editCard);

  //console.log(editCard);

  return (
    <div className={classes.container}>
      {!openEditForm ? (
        cards.map((card, index) => (
          <div style={{ gridColumnEnd: "span 4" }} key={index}>
            <UserCard
              card={card}
              onEdit={() => showEditUserCard(card.uuid)}
              onDelete={() => deleteUserCard(card.uuid)}
            />
          </div>
        ))
      ) : (
        <div style={{ gridColumnEnd: "span 4" }}>
          <EditUserCard card={editCard} onEdit={() => hideEditUserCard()} />
        </div>
      )}
    </div>
  );
};

export default UserCards;
