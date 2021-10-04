import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import GroupIcon from "@material-ui/icons/Group";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { userCardActions, pageActions } from "../../state";

const FilterAllPosts = () => {
  const dispatch = useDispatch();

  const { setPageFilter, setPage } = bindActionCreators(pageActions, dispatch);
  const { getUserCards, clearState } = bindActionCreators(
    userCardActions,
    dispatch
  );

  const handlePageFilter = () => {
    setPageFilter(true);
    clearState();
    setPage(1);
    getUserCards();
  };

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
