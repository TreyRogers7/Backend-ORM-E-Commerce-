const express = require('express');
const routes = require('./routes');
const mySql = require('mysql2');
// import sequelize connection
const sequelize = require('./config/connection');
require('dotenv');

const app = express();
const PORT = process.env.PORT || 3306;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {console.log(`App listening on port ${PORT}!`)});
});
