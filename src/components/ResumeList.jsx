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
            {resume.firstname}
          </li>
        );
      })}
    </div>
  );
}
