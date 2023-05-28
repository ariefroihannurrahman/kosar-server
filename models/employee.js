/* eslint linebreak-style: ["error", "windows"] */
import connection from '../src/database.js';

const employeeModel = {};

employeeModel.getAllemployees = (callback) => {
  const query = `SELECT * FROM employee`;
  connection.query(query, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

employeeModel.getEmployeeByNIP = (nip, callback) => {
  const query = `SELECT * FROM employee WHERE nip = ?`;
  connection.query(query, nip, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

employeeModel.createEmployee = (employee, callback) => {
  const query = `
    INSERT INTO employee (
      employee_number,
      nip,
      name,
      position,
      status,
      username,
      password
    )
    VALUES (
      NULL,
      '${employee.nip}',
      '${employee.name}',
      '${employee.position}',
      '${employee.status}',
      '${employee.username}',
      '${employee.password}');
    `;

  connection.query(query, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
};

employeeModel.updateEmployee = (nip, update, callback) => {
  const query = `
    UPDATE employee 
    SET name = '${update.name}',
    position = '${update.position}',
    status = '${update.status}',
    username = '${update.username}',
    password = '${update.password}'
    WHERE nip = ?;
  `;
  connection.query(query, nip, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

employeeModel.deleteEmployee = (nip, callback) => {
  const query = 'DELETE FROM employee WHERE nip = ?';
  connection.query(query, nip, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
};

export default employeeModel;
