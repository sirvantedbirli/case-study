module.exports = {
  HOST: process.env.DB_HOST || "localhost",
  USER: process.env.DB_USER || "root",
  PASSWORD: process.env.DB_PASSWORD || "P@ssw0rd1", 
  DB: process.env.DB_NAME || "customers",
  PORT: process.env.DB_PORT || 3306
};