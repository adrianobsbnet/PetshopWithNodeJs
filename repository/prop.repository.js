import { connect } from "./db.js";
import ar from "./animal.repository.js";

async function createProprietario(prop) {
  const conn = await connect();
  try {
    const sql =
      "INSERT INTO proprietarios (nome, telefone) VALUES ($1,$2) returning *";
    const values = [prop.nome, prop.telefone];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getProprietarios() {
  const conn = await connect();
  try {
    const res = await conn.query("select * from proprietarios");
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getProprietario(id) {
  const conn = await connect();
  try {
    const res = await conn.query(
      "select * from proprietarios where proprietario_id = $1",
      [id]
    );
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function updateProprietario(prop) {
  const conn = await connect();
  try {
    const sql =
      "update proprietarios set nome = $1, telefone = $2 where proprietario_id = $3 returning *";
    const values = [prop.nome, prop.telefone, prop.proprietario_id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function deleteProprietario(id) {
  const conn = await connect();
  try {
    const result = await ar.getAnimaisProprietario(id);
    if (result.length != 0) {
      throw new Error("Exclusão não permitida. Há animais cadastrados.");
    }

    await conn.query("delete from proprietarios where proprietario_id = $1", [
      id,
    ]);
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

export default {
  createProprietario,
  getProprietarios,
  getProprietario,
  deleteProprietario,
  updateProprietario,
};
