import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import NotesIcon from "@material-ui/icons/Person";
import EmojiObjectsIcon from "@material-ui/icons/Group";

export const mainListItems = (
  <div>
    <ListSubheader inset>Categories</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <NotesIcon />
      </ListItemIcon>
      <ListItemText primary="My posts" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EmojiObjectsIcon />
      </ListItemIcon>
      <ListItemText primary="All posts" />
    </ListItem>
  </div>
);
