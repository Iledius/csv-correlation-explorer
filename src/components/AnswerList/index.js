import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { AndroidSharp } from "@material-ui/icons";

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

const AnswerList = ({
  csvData,
  activeQuestion,
  setActiveAnswers,
  hideQuestions,
  hideAnswers,
}) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index, ans) => {
    hideAnswers(false);
    hideQuestions(true);
    setSelectedIndex(index);
    var activeAnswers = [];
    csvData.forEach((element) => {
      var answer = element[activeQuestion];
      if (answer === ans) {
        activeAnswers.push(element);
      }
    });
    setActiveAnswers(activeAnswers);
  };

  var v = -1;

  // create list of answers to the active question w/o duplicates
  var csvData_unique = [{}];
  csvData.forEach((element) => {
    var answer = element[activeQuestion];
    console.log(answer);
    if (csvData_unique[answer]) {
      csvData_unique[answer]++;
    } else {
      csvData_unique[answer] = 1;
    }
  });

  return (
    <div className={classes.root}>
      <List component="nav">
        {Object.keys(csvData_unique).map((ans) => {
          v++;

          // skip loop if null/obj
          if (typeof csvData_unique[ans] === "object") return false;
          var value = v;

          return (
            <ListItem
              style={{
                background: `linear-gradient(to right, #83c3f7 ${
                  (csvData_unique[ans] / csvData.length) * 100
                }%,white 0%)`,
              }}
              button
              selected={selectedIndex === value}
              onClick={(event) => handleListItemClick(event, value, ans)}
            >
              <ListItemText
                primary={`${ans === "" ? "Empty answer" : ans} ${
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
