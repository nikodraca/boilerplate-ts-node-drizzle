export default {
  env: process.env.NODE_ENV,
  logLevel: process.env.LOG_LEVEL || 5,
  port: process.env.PORT || 3000,
  db: {
    url: process.env.DATABASE_URL,
  },
};
