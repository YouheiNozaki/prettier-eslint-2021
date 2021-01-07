/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Pool } from 'pg';

const pool = new Pool({
  max: 20,
  connectionString: 'postgres://user:postgres@postgres:5432/todo-db',
});

export default pool;
