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
          address: "xxxxxxxx Itabashi-ku, Tokyo",
          gender: "female",
          career1: "********* corporation",
          career1_description:
            "I experienced fooooooooo!fooooooooooooooooooooooooooooooooooo!",
          career2: "*** corporation",
          career2_description:
            "I experienced bar!fooooooooooooooooooooooooooooooooooo!"
        }
      ]);
    });
};
