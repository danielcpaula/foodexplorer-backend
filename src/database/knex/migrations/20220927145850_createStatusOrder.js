exports.up = knex => knex.schema.createTable("status_orders", table => {
  table.increments("id").primary()
  table.text("name")
}) 

exports.down = knex => knex.schema.dropTable("status_orders") 