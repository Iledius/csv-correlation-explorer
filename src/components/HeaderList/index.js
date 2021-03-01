import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    minWidth: 360,
    backgroundColor: theme.palette.background.default,
    boxShadow: "0 3px 5px 2px rgba(50, 50, 135, .1)",
    padding: "0 10px",
  },
}));

const HeaderList = (props) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index, qst) => {
    setSelectedIndex(index);
    props.setActiveQuestion(qst);
    props.hideAnswers(false);
    props.hideQuestions(true);
  };

  var v = -1;

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
              onClick={(event) => handleListItemClick(event, value, qst)}
            >
              <ListItemText primary={qst} />
              <ArrowForwardIosIcon fontSize="small" color="" />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};
export default HeaderList;
