import React, { useState } from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FaceIcon from "@material-ui/icons/Face";

import SubmitBox from "./components/SumbitBox";
import HeaderList from "./components/HeaderList";
import AnswerList from "./components/AnswerList";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "50%",
    margin: "0px",
  },
  toolbar: {
    marginRight: "90%",
  },
}));

const App = () => {
  const classes = useStyles();
  const [csvData, handleCsvData] = useState([{}]);
  const [headers, setHeaders] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState("Aikaleima");

  return (
    <div className="root">
      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
          <FaceIcon className={classes.icon} />
          <h1 className={classes.icon}>Shitshit</h1>
        </Toolbar>
      </AppBar>
      <Grid container justify="center">
        <SubmitBox
          handleCsvData={handleCsvData}
          setHeaders={setHeaders}
        ></SubmitBox>
      </Grid>
      <Grid container justify="left" spacing={2}>
        <Grid>
          <HeaderList headers={headers} setActiveQuestion={setActiveQuestion} />
        </Grid>
        <Grid>
          <AnswerList csvData={csvData} activeQuestion={activeQuestion} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
