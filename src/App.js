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

  return (
    <div>
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
      <HeaderList headers={headers} />
    </div>
  );
};

export default App;
