import React from "react";

export default function(props) {
  console.log("props.selectedResume", props.selectedResume);
  return (
    <div id="temp1">
      <div className="name">
        name:{props.selectedResume.firstname} {props.selectedResume.lastname}
      </div>
      <div className="career1">career1:{props.selectedResume.career1}</div>
      <div className="career1-desc">
        career1 description:{props.selectedResume.desc1}
      </div>
      <div className="career2">career2:{props.selectedResume.career2}</div>

      <div className="career2-desc">
        career2 description:{props.selectedResume.desc2}
      </div>
    </div>
  );
}
