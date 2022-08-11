import pg from "pg";

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }
  const pool = new pg.Pool({
    connectionString:
      "postgres://sneykrsq:Swqk51A_A7b0FUk4fz7fRmhG7GDg4xXa@motty.db.elephantsql.com/sneykrsq",
  });
  global.connection = pool;
  return pool.connect();
}

export { connect };
