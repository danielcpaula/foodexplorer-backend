exports.up = knex => knex.schema.createTable("food_plates", table => {
  table.increments("id")
  table.text("name")
  table.float("price")
  table.text("description")
  table.text("plateImage")
  
  table.integer("user_id").references("id").inTable("users")

  table.timestamp("created_at").default(knex.fn.now())
  table.timestamp("updated_at").default(knex.fn.now())
}) 


exports.down = knex => knex.schema.dropTable("food_plates") 
