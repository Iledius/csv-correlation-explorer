import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.default,
    boxShadow: "0 3px 5px 2px rgba(50, 50, 135, .1)",
    padding: "0 10px",
  },
}));

const HeaderList = (props) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  let v = -1;
  return (
    <div className={classes.root}>
      <List component="nav">
        {props.headers.map((qst) => {
          v++;
          var value = v;

          return (
            <ListItem
              button
              selected={selectedIndex === value}
              onClick={(event) => handleListItemClick(event, value)}
            >
              <ListItemText primary={qst} />
              <ArrowForwardIosIcon fontSize="small" color="action" />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};
export default HeaderList;
