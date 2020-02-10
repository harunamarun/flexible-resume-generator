module.exports = (knex, Resume) => {
  return () => {
    return knex("resumes")
      .select(Resume.id)
      .then(rows => rows.map(row => new Resume(row)));
  };
};
