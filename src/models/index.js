const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("node_practice", "root", "", {
  host: "localhost",
  logging: false,
  dialect: "mysql",
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("error" + err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({ force: false }).then(() => {
  console.log("Yes re-sync");
});
db.users = require("./user")(sequelize, DataTypes);
module.exports = db;
console.log(db.users);
