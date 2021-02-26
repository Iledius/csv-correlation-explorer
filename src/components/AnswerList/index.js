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

const AnswerList = ({ csvData, activeQuestion }) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [activeAnswers, setActiveAnswers] = React.useState([{}]);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  var v = -1;

  var csvData_unique = [{}];
  csvData.forEach((element) => {
    var answer = element[activeQuestion];

    if (csvData_unique[answer]) {
      csvData_unique[answer]++;
    } else {
      csvData_unique[answer] = 1;
    }
  });
  console.log(csvData_unique);

  return (
    <div className={classes.root}>
      <List component="nav">
        {Object.keys(csvData_unique).map((ans) => {
          v++;
          if (typeof csvData_unique[ans] === "object") return false;
          var value = v;
          return (
            <ListItem
              button
              selected={selectedIndex === value}
              onClick={(event) => handleListItemClick(event, value)}
            >
              <ListItemText
                primary={`${ans} ${
                  csvData_unique[ans] != 1
                    ? ` (${csvData_unique[ans]} answers)`
                    : ""
                }`}
              />
              <ArrowForwardIosIcon fontSize="small" color="action" />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default AnswerList;
