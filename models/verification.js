/* eslint linebreak-style: ["error", "windows"] */
import connection from '../src/database.js';

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

  console.log(query);

  connection.query(query, (error, result) => {
    console.log(query);
    if (error) {
      console.log(error);
      callback(error, null);
    } else {
      console.log(result);
      callback(null, result);
    }
  });
};

export default verificationModel;
