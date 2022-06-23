/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable("suppliers", (table) => { //When calling knex.schema.createTable(), you passed in the name of the table ("suppliers") and a callback function that takes an argument table, which gives you a reference to the table.
      table.increments("supplier_id").primary(); // Sets supplier_id as the primary key
      table.string("supplier_name"); //calling table.string("supplier_name") creates a column on the suppliers table called supplier_name that accepts string values
      table.string("supplier_address_line_1");
      table.string("supplier_address_line_2");
      table.string("supplier_city");
      table.string("supplier_state");
      table.string("supplier_zip");
      table.string("supplier_phone");
      table.string("supplier_email");
      table.text("supplier_notes");
      table.string("supplier_type_of_goods");
      table.timestamps(true, true); // Adds created_at and updated_at columns
      // The timestamps() method has two optional arguments: Passing true as the first argument sets the columns to be a timestamp type. 
      // Passing true as the second argument sets those columns to be non-nullable and to use the current timestamp by default.
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function (knex) {
    return knex.schema.dropTable("suppliers");
  };
