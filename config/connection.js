const Sequelize = require("sequelize");

require("dotenv").config(); 
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "localhost",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
      },
    });
// if (process.env.JAWSDB_URL) {
//   //we have jawsdb
//   console.log("We have and will use jawsdb!");
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   //otherwise connect to local db
//   sequelize = new Sequelize(
//     process.env.DB_NAME, //vars set up in .env
//     process.env.DB_USER,
//     process.env.DB_PW,
//     {
//       host: "localhost",
//       dialect: "mysql",
//       port: 3306,
//     }
//   );
// }

module.exports = sequelize;
