const { Sequelize, Model, DataTypes } = require('sequelize');
// connection
const sequelize = new Sequelize('groupomania', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
.then(() => {
    console.log('Connection to DB has been established successfully');
})
.catch((error) => {
    console.log("Unable to connect to the database: ", error);
});

module.exports = sequelize;
