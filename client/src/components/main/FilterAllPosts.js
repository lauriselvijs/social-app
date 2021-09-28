import React, { useState, useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import GroupIcon from "@material-ui/icons/Group";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { userCardActions, pageActions } from "../../state";

const FilterAllPosts = () => {
  const { allPosts } = useSelector((state) => state.page);

  const dispatch = useDispatch();

  const { setPageFilter } = bindActionCreators(pageActions, dispatch);
  const { getUserCards } = bindActionCreators(userCardActions, dispatch);

  const handlePageFilter = () => {
    setPageFilter(true);
  };

  useEffect(() => {
    getUserCards();
  }, [allPosts]);

  return (
    <ListItem button onClick={handlePageFilter}>
      <ListItemIcon>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText primary="All posts" />
    </ListItem>
  );
};

export default FilterAllPosts;
