exports.up = knex => knex.schema.createTable("order_itens", table => {
  table.increments("id").primary()

  table.integer("foodOrder_id").unsigned().nullable();
  table.integer("foodPlates_id").unsigned().nullable();

  table.foreign("foodOrder_id").references("food_order.id")
  table.foreign("foodPlates_id").references("food_plates.id")
}) 


exports.down = knex => knex.schema.dropTable("order_itens")