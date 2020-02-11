import React, { useState } from "react";

export default function ResumeList(props) {
  return (
    <div>
      {props.resumes.map(resume => {
        return (
          <li
            onClick={() => {
              props.setSelectedResume(resume);
            }}
          >
            {resume.firstname} &nbsp;
            {resume.lastname} &nbsp;
            {resume.temp1}
          </li>
        );
      })}
    </div>
  );
}
