import React from "react";

export default function ResumeList(props) {
  return (
    <div id="resume-list">
      {props.resumes.map(resume => {
        return (
          <li
            onClick={() => {
              props.setSelectedResume(resume);
            }}
          >
            {resume.firstname} &nbsp;
            {resume.lastname} &nbsp;
          </li>
        );
      })}
    </div>
  );
}
