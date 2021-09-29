import React, { useState, useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { userCardActions, pageActions } from "../../state";

const FilterMyPosts = () => {
  const { allPosts } = useSelector((state) => state.page);

  const dispatch = useDispatch();

  const { setPageFilter } = bindActionCreators(pageActions, dispatch);
  const { getUserCards } = bindActionCreators(userCardActions, dispatch);

  const handlePageFilter = () => {
    setPageFilter(false);
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
