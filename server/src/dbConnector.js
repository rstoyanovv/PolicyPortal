import { dbConfig } from "./environment.js";
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: dbConfig.user,
    host: dbConfig.host,
    database: dbConfig.database,
    password: dbConfig.password,
    port: dbConfig.port,
});

export { pool };