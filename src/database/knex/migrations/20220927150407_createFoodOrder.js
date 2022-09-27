exports.up = knex => knex.schema.createTable("food_order", table => {
  table.increments("id").primary();
  table.float("total_price");
  
  table.integer("user_id").unsigned().nullable();
  table.integer("typesPayments_id").unsigned().nullable();
  table.integer("statusOrder_id").unsigned().nullable();

  table.foreign("user_id").references("users.id");
  table.foreign("typesPayments_id").references("types_payments.id");
  table.foreign("statusOrder_id").references("status_orders.id");

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
}) 

exports.down = knex => knex.schema.dropTable("food_order")
