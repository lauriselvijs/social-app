import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import NotesIcon from "@material-ui/icons/Notes";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import CreateIcon from "@material-ui/icons/Create";

export const mainListItems = (
  <div>
    <ListSubheader inset>Categories</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <NotesIcon />
      </ListItemIcon>
      <ListItemText primary="Notes" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EmojiObjectsIcon />
      </ListItemIcon>
      <ListItemText primary="Ideas" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CreateIcon />
      </ListItemIcon>
      <ListItemText primary="Requests" />
    </ListItem>
  </div>
);
