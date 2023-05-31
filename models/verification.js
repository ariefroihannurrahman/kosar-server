import connection from "../src/database.js";

const verificationModel = {};

verificationModel.getCode = (callback) => {
  const query = `SELECT * FROM verification`;
  connection.query(query, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

verificationModel.createCode = (code, callback) => {
  const query = `
    INSERT INTO verification (code)
    VALUES ('${code}');
  `;

  connection.query(query, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
};

export default verificationModel;
