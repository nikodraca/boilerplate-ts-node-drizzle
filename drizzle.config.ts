import type { Config } from 'drizzle-kit';

import config from './src/config';

export default {
  driver: 'pg',
  schema: './db/schema.ts',
  out: './db/migrations',
  dbCredentials: {
    connectionString: config.db.url
  }
} satisfies Config;
