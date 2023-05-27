/* eslint linebreak-style: ["error", "windows"] */

import connection from './database.js';
import {nanoid} from 'nanoid';

const date = new Date().toDateString('id-ID');

const home = (request, reply)=>{
  const date = new Date().toDateString('id-ID');
  console.log(date + ' : Request success code 200');
  return reply.response('Hello World');
};

const getEmployee = (request, reply) => new Promise((resolve, reject) => {
  const {nip} = request.query;
  const querynip = `SELECT * FROM employee WHERE nip = ${nip}`;
  const querydefault = `SELECT * FROM employee`;
  const query = nip ? (querynip) : (querydefault);

  try {
    connection.query(query, function(error, results) {
      if (error) reject(error);
      console.log(date + ' : Request GET Employee success code 200');
      resolve({
        status: 'Success',
        code: 200,
        data: results,
      });
    });
  } catch (error) {
    reject(error);
  }
});

const getReporting = () => new Promise((resolve, reject) => {
  const {id} = request.query;
  const queryid = `SELECT * FROM reporting WHERE id = ${id}`;
  const querydefault = `SELECT * FROM reporting`;
  const query = id ? (queryid) : (querydefault);

  try {
    connection.query(query, function(error, results) {
      if (error) reject(error);
      console.log(date + ' : Request GET Reporting success code 200');
      resolve({
        status: 'Success',
        code: 200,
        data: results,
      });
    });
  } catch (error) {
    reject(error);
  }
});

const createEmployee = (request, reply) => {
  new Promise((resolve, reject) => {
    const EmployeeDetail = request.payload;

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
      '${EmployeeDetail.nip}',
      '${EmployeeDetail.name}',
      '${EmployeeDetail.position}',
      '${EmployeeDetail.status}',
      '${EmployeeDetail.username}',
      '${EmployeeDetail.password}');
    `;

    try {
      connection.query(query, function(error, results) {
        if (error) reject(error);
        console.log(date + ' : Request POST Employee success code 201');
        resolve({
          status: 'Success',
          code: 201,
          data: results,
        });
      });
    } catch {
      reject(error);
    }
  });

  return reply.response('POST Employee success');
};

const createReporting = (request, reply) => {
  new Promise((resolve, reject) => {
    const reportingDetail = request.payload;

    const query = `
    INSERT INTO reporting (
      complaint_number,
      complaint_id,
      complainants_name,
      complaint_date,
      description,
      work_status,
      vote
    ) 
    VALUES (
      NULL,
      '${nanoid(25)}',
      '${reportingDetail.complainants_name}', 
      '${reportingDetail.complaint_date}', 
      '${reportingDetail.description}',
      '${reportingDetail.work_status}', 
      '${reportingDetail.vote}');
    `;

    try {
      connection.query(query, function(error, results) {
        if (error) reject(error);
        console.log(date + ' : Request POST Reporting success code 201');
        resolve({
          status: 'Success',
          code: 201,
          data: results,
        });
      });
    } catch {
      reject(error);
    }
  });

  return reply.response('POST Reporting success');
};

const updateEmployee = (request, reply) => {
  const params = request.query;
  const update = request.payload;

  const query = `
    UPDATE employee 
    SET name = '${update.name}',
    position = '${update.position}',
    status = '${update.status}',
    username = '${update.username}',
    password = '${update.password}'
    WHERE nip = ${params.nip};
  `;

  new Promise((resolve, reject)=>{
    try {
      connection.query(query, function(error, results) {
        if (error) reject(error);
        console.log(date + ' : Request PUT Employee success code 201');
        resolve({
          status: 'Success',
          code: 201,
          data: results,
        });
      });
    } catch {
      reject(error);
    }
  });

  return reply.response('Update Employee success');
};

const updateReporting = (request, reply) => {
  const params = request.query;
  const update = request.payload;

  const query = `
    UPDATE reporting 
    SET complainants_name = '${update.complainants_name}', 
    complaint_date = '${update.complaint_date}', 
    work_status = '${update.work_status}', 
    vote = '${update.vote}' 
    WHERE complaint_id = ${params.id};
  `;

  new Promise((resolve, reject)=>{
    try {
      connection.query(query, function(error, results) {
        if (error) reject(error);
        console.log(date + ' : Request Update Reporting success code 201');
        resolve({
          status: 'Success',
          code: 201,
          data: results,
        });
      });
    } catch {
      reject(error);
    }
  });

  return reply.response('Update Reporting success');
};

const deleteEmployee = (request, reply) => {
  const params = request.query;
  const query = `DELETE FROM employee WHERE nip = ${params.nip}`;

  new Promise((resolve, reject) => {
    try {
      connection.query(query, function(error, results) {
        if (error) reject(error);
        console.log(date + ' : Request Delete Employee success code 202');
        resolve({
          status: 'Success',
          code: 202,
          data: results,
        });
      });
    } catch {
      reject(error);
    }
  });

  return reply.response('Delete Employee success');
};

const deleteReporting = (request, reply) => {
  const params = request.query;
  const query = `DELETE FROM reporting WHERE complaint_id = ${params.id}`;

  new Promise((resolve, reject) => {
    try {
      connection.query(query, function(error, results) {
        if (error) reject(error);
        console.log(date + ' : Request Delete Reporting success code 202');
        resolve({
          status: 'Success',
          code: 202,
          data: results,
        });
      });
    } catch {
      reject(error);
    }
  });

  return reply.response('Delete Reporting success');
};

const upVote = (request, reply) => {
  const data = request.payload;
  const query = `
    UPDATE reporting 
    SET vote = ${data.vote} 
    WHERE complaint_id = ${data.id}
  `;

  new Promise((resolve, reject) => {
    try {
      connection.query(query, function(error, results) {
        if (error) reject(error);
        resolve({
          status: 'Success',
          code: 201,
          data: results,
        });
      });
    } catch {
      reject(error);
    }
  });
};

export {
  home,
  getEmployee,
  getReporting,
  createEmployee,
  createReporting,
  updateEmployee,
  updateReporting,
  deleteEmployee,
  deleteReporting,
  upVote,
};
