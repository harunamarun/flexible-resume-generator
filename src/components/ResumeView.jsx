import React, { useState, useEffect } from "react";
import ResumeList from "./ResumeList";
import ResumeDetail from "./ResumeDetail";

export default function ResumeView() {
  const [resumes, setResumeList] = useState([]);
  const [selectedResume, setSelectedResume] = useState(null);
  const getResumes = () => {
    fetch(`/api/resumes/`)
      .then(resumes => resumes.json())
      .then(resumes => setResumeList(resumes));
  };

  useEffect(() => {
    getResumes();
  }, []);

  console.log("resumes", resumes);
  console.log("sere", selectedResume);
  return (
    <React.Fragment>
      {selectedResume === null ? (
        <ResumeList resumes={resumes} setSelectedResume={setSelectedResume} />
      ) : (
        <ResumeDetail selectedResume={selectedResume} />
      )}
    </React.Fragment>
  );
}
