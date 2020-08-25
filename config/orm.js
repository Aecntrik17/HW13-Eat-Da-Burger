// establishing relationship with internal file that hosts connection
const connection = require("./connection.js");
// setting framework for future queries
const orm = {
  // querey template for selecting and only viewing all data
  selectAll: function (tableInput, cb) {
    const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // query template for adding data to a table
  insertOne: function (tableInput, data, cb) {
    const queryString = "INSERT INTO " + tableInput + " SET ?;";
    connection.query(queryString, data, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // query template for updating data in a table
  updateOne: function (tableInput, data, update, cb) {
    const queryString = "UPDATE " + tableInput + " SET ? WHERE ?;";
    connection.query(queryString, [data, update], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};
// allowing data in this file to be exported to other files
module.exports = orm;
