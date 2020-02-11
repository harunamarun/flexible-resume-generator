import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Form() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [career1, setCareer1] = useState("");
  const [career2, setCareer2] = useState("");
  const [desc1, setCareerDes1] = useState("");
  const [desc2, setCareerDes2] = useState("");

  const newPlofile = {
    firstname,
    lastname,
    address,
    gender,
    career1,
    career2,
    desc1,
    desc2
  };

  const submitPlfile = async () => {
    fetch(`/api/resumes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(newPlofile)
    })
      .then(response => response.json())
      .then(data => JSON.stringify(data))
      .catch(error => console.error(error));
  };

  return (
    <div className="split-item form">
      <h2>Input your profile</h2>
      <div className="form-container">
        <div className="name">
          <label htmlFor="firstname">First name</label>
          <TextField
            id="firstname"
            value={firstname}
            onChange={e => setFirstname(e.target.value)}
          />
          <label htmlFor="lastname">Last name</label>
          <TextField
            id="lastname"
            value={lastname}
            onChange={e => setLastname(e.target.value)}
          />
        </div>
        <div className="address">
          <label htmlFor="address">Address</label>
          <TextField
            id="address"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </div>
        <div className="gender">
          <label htmlFor="gender">Gender</label>
          <input
            type="radio"
            name="gender"
            id="gender"
            value={gender}
            onClick={() => setGender("male")}
          />
          male&emsp;
          <input
            type="radio"
            name="gender"
            id="gender"
            value={gender}
            onClick={() => setGender("female")}
          />
          female
        </div>
        <div className="careers">
          <div className="career1">
            <div className="career">
              <label htmlFor="career1">Career1</label>
              <TextField
                id="career1"
                value={career1}
                onChange={e => setCareer1(e.target.value)}
              />
            </div>
            <div className="career">
              <label htmlFor="career1-desc">Career1 Description</label>
              <TextField
                multiline
                rowsMax="5"
                id="career1-desc"
                value={desc1}
                onChange={e => setCareerDes1(e.target.value)}
              />
            </div>
          </div>
          <div className="career2">
            <div className="career">
              <label htmlFor="career2">Career2</label>
              <TextField
                id="career2"
                value={career2}
                onChange={e => setCareer2(e.target.value)}
              />
            </div>
            <div className="career">
              <label htmlFor="career2-desc">Career2 Description</label>
              <TextField
                multiline
                rowsMax="5"
                id="career2-desc"
                value={desc2}
                onChange={e => setCareerDes2(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <Button variant="contained" id="save-btn" onClick={submitPlfile}>
        Save
      </Button>
    </div>
  );
}
