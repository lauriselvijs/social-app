import ListSubheader from "@material-ui/core/ListSubheader";
import FilterMyPosts from "./FilterMyPosts";
import FilterAllPosts from "./FilterAllPosts";

export const mainListItems = (
  <div>
    <ListSubheader inset>Categories</ListSubheader>
    <FilterMyPosts />
    <FilterAllPosts />
  </div>
);
