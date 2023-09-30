require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

import config from '../src/config';

const sql = postgres(config.db.url, { max: 1 });
const db = drizzle(sql);

(async () => {
  try {
    await migrate(db, { migrationsFolder: './db/migrations' });
  } catch (error) {
    console.error(error);
  } finally {
    process.exit();
  }
})();
