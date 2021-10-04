import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { userCardActions, pageActions } from "../../state";

const FilterMyPosts = () => {
  const dispatch = useDispatch();

  const { setPageFilter, setPage } = bindActionCreators(pageActions, dispatch);
  const { getUserCards, clearState } = bindActionCreators(
    userCardActions,
    dispatch
  );

  const handlePageFilter = () => {
    setPageFilter(false);
    clearState();
    setPage(1);
    getUserCards();
  };

  return (
    <ListItem button onClick={handlePageFilter}>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="My posts" />
    </ListItem>
  );
};

export default FilterMyPosts;
