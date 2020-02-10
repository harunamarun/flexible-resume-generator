module.exports = (knex, Resume) => {
  return params => {
    const id = params.id;
    return knex("resumes")
      .where({ id })
      .select()
      .then(resumes => {
        if (resumes.length) return new Resume(resumes.pop());
        throw new Error(`Error finding todo ${id}`);
      });
  };
};
