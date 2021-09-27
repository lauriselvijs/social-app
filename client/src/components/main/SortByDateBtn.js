import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { userCardActions, pageActions } from "../../state";

const SortByDateBtn = () => {
  const { sortByDate } = useSelector((state) => state.page);
  const [reverseOrder, setReverseOrder] = useState(false);

  const dispatch = useDispatch();

  const { setPageSort } = bindActionCreators(pageActions, dispatch);
  const { getUserCards } = bindActionCreators(userCardActions, dispatch);

  const handleSortByDate = () => {
    console.log(sortByDate);
    setReverseOrder(!reverseOrder);
    setPageSort(reverseOrder ? "DESC" : "ASC");
  };

  useEffect(() => {
    getUserCards();
  }, [setPageSort]);

  return (
    <IconButton color="inherit">
      <Badge color="secondary" onClick={handleSortByDate}>
        <CalendarTodayIcon />
        {reverseOrder ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
      </Badge>
    </IconButton>
  );
};

export default SortByDateBtn;
