import sql from "mssql";
import dotenv from "dotenv";

dotenv.config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER,
  port: Number(process.env.DB_PORT),

  options: {
    encrypt: false, // IMPORTANT for SQL Server 2012
    trustServerCertificate: true, // avoid SSL issues
  },

  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

// Create pool
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("✅ SQL Server connected successfully");
    return pool;
  })
  .catch((err) => {
    console.error("❌ SQL Server connection failed:", err.message);
    process.exit(1);
  });

export { sql, poolPromise };
