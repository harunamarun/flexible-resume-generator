module.exports = (knex, Resume) => {
  return params => {
    const firstname = params.firstname;
    const lastname = params.lastname;
    const address = params.address;
    const gender = params.gender;
    const career1 = params.career1;
    const desc1 = params.desc1;
    const career2 = params.career2;
    const desc2 = params.desc2;
    const template = params.template;

    return knex("resumes")
      .insert({
        firstname,
        lastname,
        address,
        gender,
        career1,
        career1_description: desc1,
        career2,
        career2_description: desc2,
        template
      })
      .then(() => {
        return knex("resumes")
          .where({ firstname })
          .select();
      })
      .then(resumes => new Resume(resumes.pop()))
      .catch(err => {
        // throw unknown errors
        return Promise.reject(err);
      });
  };
};
