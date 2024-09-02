const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}
async function addMessageToDb(text, user, added) {
  const sql = "INSERT INTO messages(text,username,added) VALUES ($1,$2,$3)";
  const values = [text, user, added];
  await pool.query(sql, values);
}

module.exports = {
  getAllMessages,
  addMessageToDb,
};
