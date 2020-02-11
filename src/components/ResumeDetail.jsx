import React, { useState } from "react";
import Template1 from "./Template1";
import Template2 from "./Template2";
import { Button } from "@material-ui/core";

export default function ResumeDetail(props) {
  const [template, setTemplate] = useState("temp1");

  return (
    <dev className="detail">
      <Button
        variant="contained"
        id="template1-btn"
        onClick={() => setTemplate("temp1")}
      >
        Template1
      </Button>
      <Button
        variant="contained"
        id="template2-btn"
        onClick={() => setTemplate("temp2")}
      >
        Template2
      </Button>
      {template === "temp1" ? (
        <Template1 selectedResume={props.selectedResume} />
      ) : (
        <Template2 selectedResume={props.selectedResume} />
      )}
    </dev>
  );
}
