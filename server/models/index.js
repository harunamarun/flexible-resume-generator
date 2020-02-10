module.exports = function(knex) {
  return {
    resumes: require("./resumes")(knex)
  };
};
