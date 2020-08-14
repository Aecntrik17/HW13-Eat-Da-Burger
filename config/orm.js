const connection = require("./connection.js");
const orm = {
  selectAll: function (tableInput, cb) {
    const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function (tableInput, data, cb) {
    const queryString = "INSERT INTO " + tableInput + " SET ?;";
    connection.query(queryString, data, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

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
module.exports = orm;
