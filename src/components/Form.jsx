import React, { useState } from "react";

export default function Form() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [career1, setCareer1] = useState("");
  const [career2, setCareer2] = useState("");
  const [desc1, setCareerDes1] = useState("");
  const [desc2, setCareerDes2] = useState("");
  const [template, setTemplate] = useState("");

  const newPlofile = {
    firstname,
    lastname,
    address,
    gender,
    career1,
    career2,
    desc1,
    desc2,
    template
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
    <div className="form">
      <h2>Input your profile</h2>
      <div className="post-content">
        <div className="name">
          <label htmlFor="firstname">First name</label>
          <input
            id="firstname"
            value={firstname}
            onChange={e => setFirstname(e.target.value)}
          />
          <label htmlFor="lastname">Last name</label>
          <input
            id="lastname"
            value={lastname}
            onChange={e => setLastname(e.target.value)}
          />
        </div>
        <div className="address">
          <label htmlFor="address">Address</label>
          <input
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
          male
          <input
            type="radio"
            name="gender"
            id="gender"
            value={gender}
            onClick={() => setGender("female")}
          />
          female
        </div>
        <div className="career">
          <div className="career1">
            <label htmlFor="gender">Career1</label>
            <input
              id="career1"
              value={career1}
              onChange={e => setCareer1(e.target.value)}
            />
            <label htmlFor="career1-desc">Career1 Description</label>
            <textarea
              id="career1-desc"
              value={desc1}
              onChange={e => setCareerDes1(e.target.value)}
            />
          </div>
          <div className="career2">
            <label htmlFor="gender">Career2</label>
            <input
              id="career2"
              value={career2}
              onChange={e => setCareer2(e.target.value)}
            />
            <label htmlFor="career2-desc">Career2 Description</label>
            <textarea
              id="career2-desc"
              value={desc2}
              onChange={e => setCareerDes2(e.target.value)}
            />
          </div>
          <div className="template">
            <label htmlFor="template">Template</label>
            <input
              type="radio"
              name="template"
              id="template"
              value={template}
              onClick={() => setTemplate("temp1")}
            />
            template1
            <input
              type="radio"
              name="template"
              id="template"
              value={template}
              onClick={() => setTemplate("temp2")}
            />
            template2
          </div>
        </div>
      </div>
      <button id="save-btn" onClick={submitPlfile}>
        Save
      </button>
    </div>
  );
}
