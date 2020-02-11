import React, { useState } from "react";
import Template1 from "./Template1";
import Template2 from "./Template2";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "20px"
  }
}));
export default function ResumeDetail(props) {
  const [template, setTemplate] = useState("temp2");
  const classes = useStyles();

  return (
    <dev className="detail">
      <Button
        className={classes.root}
        variant="contained"
        id="template1-btn"
        onClick={() => setTemplate("temp1")}
      >
        Template1
      </Button>
      <Button
        className={classes.root}
        variant="contained"
        id="template2-btn"
        onClick={() => setTemplate("temp2")}
      >
        Template2
      </Button>
      <Button className={classes.root} variant="contained" id="export-btn">
        Export
      </Button>

      {template === "temp1" ? (
        <Template1 selectedResume={props.selectedResume} />
      ) : (
        <Template2 selectedResume={props.selectedResume} />
      )}
    </dev>
  );
}
