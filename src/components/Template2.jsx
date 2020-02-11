import React from "react";

export default function(props) {
  console.log("props.selectedResume", props.selectedResume);
  return (
    <div id="temp2">
      <div className="name">
        <div className="temp2-title">name:</div>
        <div id="name-content">
          {props.selectedResume.firstname} {props.selectedResume.lastname}
        </div>
      </div>
      <div className="gender">
        <div className="temp2-title">gender:</div>
        <div id="gender-content">{props.selectedResume.gender}</div>
      </div>
      <div className="address">
        <div className="temp2-title">Address:</div>
        <div id="gender-content">
          {props.selectedResume.adress} {props.selectedResume.address}
        </div>
      </div>
      <div class="photo">photo</div>
      <hr />
      <div className="career1">
        <div className="temp2-title">career1:</div>
        <div id="career1-content">{props.selectedResume.career1}</div>
      </div>
      <div className="career1-desc">
        <div className="temp2-title">career1 description:</div>
        <div id="career1-desc-content">{props.selectedResume.desc1}</div>
      </div>
      {props.selectedResume.career2 !== "" ? (
        <React.Fragment>
          <div className="career2">
            <div className="temp2-title">career2:</div>
            <div id="career2-content">{props.selectedResume.career2}</div>
          </div>
          <div className="career2-desc">
            <div className="temp2-title">career2 description:</div>
            <div id="career2-desc-content">{props.selectedResume.desc2}</div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </div>
  );
}
