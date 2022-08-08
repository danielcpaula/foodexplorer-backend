exports.up = knex => knex.schema.createTable("order_itens", table => {
  table.increments("id")

  table.integer("foodOrder_id").references("id").inTable("food_order")
  table.integer("foodPlates_id").references("id").inTable("food_plates")
}) 


exports.down = knex => knex.schema.dropTable("order_itens")