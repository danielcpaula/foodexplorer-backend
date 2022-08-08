exports.up = knex => knex.schema.createTable("ingredients", table => {
  table.increments("id")
  table.text("name")
  table.integer("foodPlates_id").references("id").inTable("food_plates").onDelete("CASCADE")
}) 


exports.down = knex => knex.schema.dropTable("ingredients") 