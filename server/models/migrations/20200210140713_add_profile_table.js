exports.up = function(knex, Promise) {
  return knex.schema.createTable("resumes", t => {
    t.increments().index();

    t.string("firstname", 30).notNullable();
    t.string("lastname", 30).notNullable();

    t.text("address").notNullable();
    t.enu("gender", ["male", "female"]).index();

    t.text("career1");
    t.text("career1_description");

    t.text("career2");
    t.text("career2_description");

    t.enu("template", ["temp1", "temp2"]).index();

    t.timestamp("updated_at")
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("resumes");
};
