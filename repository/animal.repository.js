import { connect } from "./db.js";

async function createAnimal(animal) {
  const conn = await connect();
  try {
    const sql =
      "INSERT INTO animais (nome, tipo, proprietario_id) VALUES ($1,$2,$3) returning *";
    const values = [animal.nome, animal.tipo, animal.proprietario_id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getAnimais() {
  const conn = await connect();
  try {
    const res = await conn.query("select * from animais order by animal_id");
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getAnimaisProprietario(prop) {
  const conn = await connect();
  try {
    const res = await conn.query(
      "select * from animais where proprietario_id = $1 order by animal_id",
      [prop]
    );
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getAnimal(id) {
  const conn = await connect();
  try {
    const res = await conn.query("select * from animais where animal_id = $1", [
      id,
    ]);
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function updateAnimal(animal) {
  const conn = await connect();
  try {
    const sql =
      "update animais set nome = $1, tipo = $2, proprietario_id = $3 where animal_id = $4 returning *";
    const values = [
      animal.nome,
      animal.tipo,
      animal.proprietario_id,
      animal.animal_id,
    ];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function deleteAnimal(id) {
  const conn = await connect();
  try {
    await conn.query("delete from animais where animal_id = $1", [id]);
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

export default {
  createAnimal,
  getAnimais,
  getAnimal,
  deleteAnimal,
  updateAnimal,
  getAnimaisProprietario,
};
