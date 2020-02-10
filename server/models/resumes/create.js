module.exports = (knex, Resume) => {
  return params => {
    const firstname = params.firstname;
    const lastname = params.lastname;
    const address = params.address;
    const gender = params.gender;
    const career1 = params.career1;
    const desc1 = params.career1_description;
    const career2 = params.career2;
    const desc2 = params.career2_description;
    const template = params.template;

    return knex("resumes")
      .insert({
        firstname,
        lastname,
        address,
        gender,
        career1,
        desc1,
        career2,
        desc2,
        template
      })
      .then(() => {
        return (
          knex("resumes")
            //   .where({ id })
            .select()
        );
      })
      .then(resumes => new Resume(resumes.pop()))
      .catch(err => {
        // throw unknown errors
        return Promise.reject(err);
      });
  };
};
