exports.up = knex => knex.schema.createTable("ingredients", table => {
  table.increments("id").primary();
  table.text("name");
  table.integer("foodPlates_id").unsigned().nullable();

  table.foreign("foodPlates_id").references("food_plates.id").onDelete("CASCADE");
}) 


exports.down = knex => knex.schema.dropTable("ingredients") 