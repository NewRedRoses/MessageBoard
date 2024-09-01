#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = "INSERT INTO messages (text,username) VALUES ('test', 'Mark' )";

async function main() {
  console.log("Seeding...");
  const client = new Client({
    connectionString: process.env.PROD_DB_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done");
}
main();
