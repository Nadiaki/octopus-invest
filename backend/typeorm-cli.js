const { DataSource } = require('typeorm');
const { AppDataSource } = require('./dist/database/data-source');

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

module.exports = AppDataSource;
