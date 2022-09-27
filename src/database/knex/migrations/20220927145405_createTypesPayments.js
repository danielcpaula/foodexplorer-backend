exports.up = knex => knex.schema.createTable("types_payments", table => {
  table.increments("id").primary()
  table.text("name")
}) 

exports.down = knex => knex.schema.dropTable("types_payments")