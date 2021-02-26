import React, { useState } from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid, Container, Button, Drawer } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import FileZone from "../FileZone";
import { parse } from "papaparse";
import Dropzone from "react-dropzone";
import { AttachFile } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
    spacing: "10px",
    backgroundColor: "#b3e5fc",
  },
  header: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  buttonDiv: { padding: theme.spacing(2) },
}));

const SubmitBox = (props) => {
  const [uploadState, setUploadState] = useState("Not uploaded");
  const [drawerState, setDrawerState] = useState(true);
  const classes = useStyles();

  return (
    <Drawer open={drawerState} anchor="top" className={classes.root}>
      <Container maxWidth="sm" className={classes.mainContainer}>
        <Typography component="h1" variant="h2" gutterBottom>
          Upload your .csv
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Drag and drop or choose a file:
        </Typography>

        <FileZone
          handleCsvData={props.handleCsvData}
          setUploadState={setUploadState}
          setHeaders={props.setHeaders}
        ></FileZone>

        <div className={classes.buttonDiv}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                variant={uploadState === "Uploaded" ? "contained" : "outlined"}
                onClick={() => {
                  setDrawerState(false);
                }}
                color="primary"
              >
                <SaveIcon />
                Upload
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  setUploadState("Not uploaded");
                }}
              >
                Remove files
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Drawer>
  );
};

export default SubmitBox;
