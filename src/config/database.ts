// src/config/database.ts

import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgre',
    host: 'localhost',
    database: 'postgre',
    password: 'postgre',
    port: 5432,
});

export default pool;
