exports.up = function(knex, Promise) {
  return knex.schema.createTable("profiles", t => {
    t.increments().index();

    t.string("firstname", 30).notNullable();
    t.string("lastname", 30).notNullable();

    t.string("jpname", 30);
    t.string("furigana", 30);

    t.text("address").notNullable();

    t.text("career1");
    t.text("career1-description");

    t.text("career2");
    t.text("career2-description");

    t.enu("template", ["temp1", "temp2"]).index();

    t.timestamp("create-at")
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("profiles");
};
