exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resumes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resumes").insert([
        {
          firstname: "Hanako",
          lastname: "Yamada",
          address: "Itabashi-ku, Tokyo",
          gender: "female",
          career1: "********* corporation",
          career1_description: "I experienced fooooooooo!",
          career2: "*** corporation",
          career2_description: "I experienced piyopiyo!",
          template: "temp1"
        }
      ]);
    });
};
