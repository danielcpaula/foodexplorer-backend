exports.up = knex => knex.schema.createTable("status_order", table => {
  table.increments("id")
  table.text("name")
}) 


exports.down = knex => knex.schema.dropTable("status_order") 
