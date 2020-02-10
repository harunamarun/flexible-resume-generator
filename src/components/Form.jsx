import React, { useState } from "react";

export default function Form() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const newPlofile = {
    firstname,
    lastname,
    address: "TOKYO"
  };
  const submitPlfile = async () => {
    fetch(`http://localhost:3000/api/resumes`, {
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
      <h2>input profile</h2>
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
          <textarea id="address" />
        </div>
        <div className="gender">
          <label htmlFor="gender">Gender</label>
        </div>

        <div className="career">
          <div className="career1">
            <label htmlFor="career1">Career1</label>
            <input id="career1" />
            <label htmlFor="career1">Description1</label>
            <input id="career1-desc" />
          </div>
          <div className="career2">
            <label htmlFor="career2">Career2</label>
            <input id="career2" />
            <label htmlFor="career2">Description2</label>
            <input id="career2-desc" />
          </div>
        </div>
      </div>
      <button id="save-btn" onClick={submitPlfile}>
        Save
      </button>
    </div>
  );
}

// const firstname = params.firstname;
// const lastname = params.lastname;
// const address = params.address;
// const gender = params.gender;
// const career1 = params.career1;
// const desc1 = params.desc1;
// const career2 = params.career2;
// const desc2 = params.desc2;
// const template = params.template;
