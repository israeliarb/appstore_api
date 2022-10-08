import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "institutes";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
      table.string("name", 255).notNullable();
      table.string("logo", 255).nullable();
      table.boolean("active").notNullable().defaultTo(false);
      table.boolean("online").notNullable().defaultTo(false);
      table.timestamp("updated_at").notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}