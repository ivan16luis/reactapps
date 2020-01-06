"use strict";
/*
const mysql = require("mysql");
const connection = mysql.createPool({
  host: "10.128.0.10",
  //host: "localhost",
  port: 3306,
  user: "root",
  password: "123.456",
  database: "dbSelectSR"
});
*/
module.exports = {
  secret: "05019536.180411",
  port: process.env.PORT || 8080,
  database: "mongodb://localhost:27017/crm-react-graphql-redux",
  saltRounds: 10
};
