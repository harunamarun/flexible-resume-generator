const moment = require("moment");

const Resume = function(dbResume) {
  this.id = dbResume.id;
  this.firstname = dbResume.firstname;
  this.lastname = dbResume.lastname;
  this.address = dbResume.address;
  this.gender = dbResume.gender;
  this.career1 = dbResume.career1;
  this.desc1 = dbResume.career1_description;
  this.career2 = dbResume.career2;
  this.desc2 = dbResume.career2_description;
  this.template = dbResume.template;
  this.updatedAt = new Date(dbResume.updated_at);
};

Resume.prototype.serialize = function() {
  return {
    id: this.id,
    firstname: this.firstname,
    lastname: this.lastname,
    address: this.address,
    gender: this.gender,
    career1: this.career1,
    desc1: this.desc1,
    career2: this.career2,
    desc2: this.desc2,
    template: this.template,
    updatedAt: moment(this.updatedAt).format("YYYY-MM-DD hh:mm:ss")
  };
};

module.exports = knex => {
  return {
    create: require("./create")(knex, Resume)
    // list: require("./list")(knex, Resume),
    // get: require("./get")(knex, Resume),
    // delete: require("./delete")(knex, Resume)
  };
};
