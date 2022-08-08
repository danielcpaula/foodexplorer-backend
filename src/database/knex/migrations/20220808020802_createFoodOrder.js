exports.up = knex => knex.schema.createTable("food_order", table => {
  table.increments("id")
  table.float("total_price")

  table.integer("user_id").references("id").inTable("users")
  table.integer("typesPayments_id").references("id").inTable("types_payments")
  table.integer("statusOrder_id").references("id").inTable("status_orders")

  table.timestamp("created_at").default(knex.fn.now())
  table.timestamp("updated_at").default(knex.fn.now())
}) 


exports.down = knex => knex.schema.dropTable("food_order")
