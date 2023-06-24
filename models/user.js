/* eslint linebreak-style: ["error", "windows"] */
import connection from '../src/database.js';

const userModel = {};

userModel.createUser = (user, callback) => {
  const accountState = 'Pending';

  const query = `
    INSERT INTO user (
      nik,
      email,
      name,
      password,
      account_state
    )
    VALUES (
      '${user.nik}',
      '${user.email}',
      '${user.name}',
      '${user.password}',
      '${accountState}'

    );
  `;

  connection.query(query, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
};

userModel.updateUser = (id, update, callback) => {
  let query = `
    UPDATE user 
    SET account_state = '${update.account_state || 'Verified'}'
    WHERE user_id = '${id}';
  `;

  if (update.account_state === 'Unverified') {
    query = `
      UPDATE user 
      SET account_state = '${update.account_state}'
      WHERE user_id = '${id}';
    `;
  }

  connection.query(query, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

userModel.loginUser = (nik, password, callback) => {
  const query = `
  SELECT user_id, email, name, account_state  FROM user
  WHERE nik = ? AND password = ?;
`;

  connection.query(query, [nik, password], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

userModel.getAllusers = (callback) => {
  const query = `SELECT * FROM user`;
  connection.query(query, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

userModel.getUsersByNIK = (nik, callback) => {
  const query = `SELECT * FROM user WHERE nik = ?`;
  connection.query(query, nik, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

userModel.getUsersByUserId = (userId, callback) => {
  const query = `SELECT * FROM user WHERE user_id = ?`;
  connection.query(query, userId, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

export default userModel;
