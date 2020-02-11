import React from "react";

export default function(props) {
  console.log("props.selectedResume", props.selectedResume);
  return (
    <div id="temp2">
      <div className="name">
        <div className="temp2-title">name:</div>
        {props.selectedResume.firstname} {props.selectedResume.lastname}
      </div>
      <div class="photo">photo</div>
      <div className="address">
        <div className="temp2-title">Address:</div>
        {props.selectedResume.adress} {props.selectedResume.address}
      </div>

      <div className="gender">
        <div className="temp2-title">gender:</div>
        {props.selectedResume.gender}
      </div>
      <div className="career1">
        <div className="temp2-title">career1:</div>
        {props.selectedResume.career1}
      </div>
      <div className="career1-desc">
        <div className="temp2-title">career1 description:</div>
        {props.selectedResume.desc1}
      </div>
      {props.selectedResume.career2 !== "" ? (
        <React.Fragment>
          <div className="career2">
            <div className="temp2-title">career2:</div>
            {props.selectedResume.career2}
          </div>
          <div className="career2-desc">
            <div className="temp2-title">career2 descriptio:</div>
            {props.selectedResume.desc2}
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </div>
  );
}
