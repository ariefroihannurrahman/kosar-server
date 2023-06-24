/* eslint linebreak-style: ["error", "windows"] */
import employeeModel from "../models/employee.js";
import reportingModel from "../models/reporting.js";
import verificationModel from "../models/verification.js";
import userModel from "../models/user.js";

const date = new Date().toDateString("id-ID");

const home = (request, reply) => {
  const date = new Date().toDateString("id-ID");
  console.log(date + " : Request success code 200");
  return reply.response("Hello World");
};

const getEmployee = (request, reply) => {
  const { nip } = request.query;
  if (nip) {
    return new Promise((resolve, reject) => {
      employeeModel.getEmployeeByNIP(nip, (error, result) => {
        if (error) reject(error);
        console.log(date + " : Request GET Employee by NIP success code 200");
        resolve({
          status: "Success",
          code: 200,
          data: result,
        });
      });
    });
  }

  return new Promise((resolve, reject) => {
    employeeModel.getAllemployees((error, results) => {
      if (error) reject(error);
      console.log(date + " : Request GET Employees success code 200");
      resolve({
        status: "Success",
        code: 200,
        data: results,
      });
    });
  });
};

const getReporting = (request, reply) => {
  const { id } = request.query;
  if (id) {
    return new Promise((resolve, reject) => {
      reportingModel.getReportingByID(id, (error, result) => {
        if (error) reject(error);
        console.log(date + " : Request GET Reporting by ID success code 200");
        resolve({
          status: "Success",
          code: 200,
          data: result,
        });
      });
    });
  }

  return new Promise((resolve, reject) => {
    reportingModel.getAllReporting((error, results) => {
      if (error) reject(error);
      console.log(date + " : Request GET Reporting success code 200");
      resolve({
        status: "Success",
        code: 200,
        data: results,
      });
    });
  });
};

const createEmployee = (request, reply) => {
  const employee = request.payload;
  return new Promise((resolve, reject) => {
    employeeModel.createEmployee(employee, (error, results) => {
      if (error) reject(error);
      console.log(date + " : Request POST Employee success code 201");
      resolve({
        status: "Success",
        code: 201,
        data: results,
      });
    });
  });
};

const createReporting = (request, reply) => {
  return new Promise((resolve, reject) => {
    const detail = request.payload;
    reportingModel.createReporting(detail, (error, results) => {
      if (error) reject(error);
      console.log(date + " : Request POST Reporting success code 201");
      resolve({
        status: "Success",
        code: 201,
        data: results,
      });
    });
  });
};

const updateEmployee = (request, reply) => {
  const { nip } = request.query;
  const update = request.payload;

  return new Promise((resolve, reject) => {
    employeeModel.updateEmployee(nip, update, (error, results) => {
      if (error) reject(error);
      console.log(date + " : Request PUT Employee success code 201");
      resolve({
        status: "Success",
        code: 201,
        data: results,
      });
    });
  });
};

const updateReporting = (request, reply) => {
  const { id } = request.query;
  const update = request.payload;

  return new Promise((resolve, reject) => {
    reportingModel.updateReporting(id, update, (error, results) => {
      if (error) reject(error);
      console.log(date + " : Request PUT Reporting success code 201");
      resolve({
        status: "Success",
        code: 201,
        data: results,
      });
    });
  });
};

const deleteEmployee = (request, reply) => {
  const { nip } = request.query;

  return new Promise((resolve, reject) => {
    employeeModel.deleteEmployee(nip, (error, results) => {
      if (error) reject(error);
      console.log(date + " : Request DELETE Employee success code 201");
      resolve({
        status: "Success",
        code: 201,
        data: results,
      });
    });
  });
};

const deleteReporting = (request, reply) => {
  const { id } = request.query;

  return new Promise((resolve, reject) => {
    reportingModel.deleteReporting(id, (error, results) => {
      if (error) reject(error);
      console.log(date + " : Request DELETE Reporting success code 201");
      resolve({
        status: "Success",
        code: 201,
        data: results,
      });
    });
  });
};

const updateReportingReason = (request, reply) => {
  const { id } = request.query;
  const { reason } = request.payload;

  return new Promise((resolve, reject) => {
    reportingModel.updateReportingReason(id, reason, (error, results) => {
      if (error) reject(error);
      console.log(date + " : Request PUT Reporting Reason success code 201");
      resolve({
        status: "Success",
        code: 201,
        data: results,
      });
    });
  });
};

// Tambahan

const vote = (request, reply) => {
  const { vote } = request.payload;
  const { id } = request.query;

  return new Promise((resolve, reject) => {
    reportingModel.vote(id, vote, (error, results) => {
      if (error) reject(error);
      console.log(date + " : Request PUT Reporting vote success code 201");
      resolve({
        status: "Success",
        code: 201,
        data: results,
      });
    });
  });
};

const loginEmployee = (request, reply) => {
  const { username, password } = request.payload;

  return new Promise((resolve, reject) => {
    employeeModel.loginEmployee(username, password, (error, results) => {
      if (error) {
        console.log(date + " : Request POST Login Employee error", error);
        reject(error);
      }

      if (results.length > 0) {
        console.log(date + " : Request POST Login Employee success code 200");
        resolve({
          status: "Success",
          code: 200,
          message: "Login successful",
          position: results[0].position,
        });
      } else {
        console.log(date + " : Request POST Login Employee failed code 401");
        reject({
          status: "Unauthorized",
          code: 401,
          message: "Invalid username or password",
        });
      }
    });
  });
};

const getCode = (request, reply) => {
  return new Promise((resolve, reject) => {
    verificationModel.getCode((error, results) => {
      if (error) {
        console.log("Error while fetching kode:", error);
        reject(error);
      }
      resolve({
        status: "Success",
        code: 200,
        data: results,
      });
    });
  });
};

const createCode = (request, reply) => {
  const { code } = request.payload;

  return new Promise((resolve, reject) => {
    verificationModel.createCode(code, (error, result) => {
      if (error) {
        console.log("Error while creating kode:", error);
        reject(error);
      }
      resolve({
        status: "Success",
        code: 201,
        message: "Kode created successfully",
        data: result,
      });
    });
  });
};

const sendCode = (request, reply) => {
  const { code } = request.payload;

  return new Promise((resolve, reject) => {
    verificationModel.getCode((error, results) => {
      if (error) {
        console.log("Error while fetching kode:", error);
        reject(error);
      }
      const matchingCode = results.find((result) => result.code === code);
      if (matchingCode) {
        console.log(`Sending code ${code} to the user`);

        resolve({
          status: "Success",
          code: 200,
          message: "Code sent successfully",
        });
      } else {
        reject({
          status: "Error",
          code: 404,
          message: "Invalid code",
        });
      }
    });
  });
};

// Login User

const getUser = (request, reply) => {
  const { nik } = request.query;
  if (nik) {
    return new Promise((resolve, reject) => {
      userModel.getUsersByNIK(nik, (error, result) => {
        if (error) reject(error);
        console.log(date + " : Request GET Users by NIK success code 200");
        resolve({
          status: "Success",
          code: 200,
          data: result,
        });
      });
    });
  }

  return new Promise((resolve, reject) => {
    userModel.getAllusers((error, results) => {
      if (error) reject(error);
      console.log(date + " : Request GET Users success code 200");
      resolve({
        status: "Success",
        code: 200,
        data: results,
      });
    });
  });
};

const getUsersByUserId = (request, reply) => {
  const { userId } = request.query;
  if (userId) {
    return new Promise((resolve, reject) => {
      userModel.getUsersByUserId(userId, (error, result) => {
        if (error) reject(error);
        console.log(date + " : Request GET Users by user_id success code 200");
        resolve({
          status: "Success",
          code: 200,
          data: result,
        });
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      reject({
        status: "Error",
        code: 400,
        message: "Missing user_id parameter",
      });
    });
  }
};

const createUser = (request, reply) => {
  const user = request.payload;
  return new Promise((resolve, reject) => {
    userModel.createUser(user, (error, results) => {
      if (error) reject(error);
      console.log(date + " : Request POST User success code 201");
      resolve({
        status: "Success",
        code: 201,
        data: results,
      });
    });
  });
};

const loginUser = (request, reply) => {
  const { nik, password } = request.payload;

  return new Promise((resolve, reject) => {
    userModel.loginUser(nik, password, (error, results) => {
      if (error) {
        console.log(date + " : Request POST Login User error", error);
        reject(error);
      }

      if (results.length > 0) {
        console.log(date + " : Request POST Login User success code 200");
        const { user_id, email, name, account_state } = results[0];
        resolve({
          status: "Success",
          code: 200,
          message: "Login successful",
          user_id,
          email,
          name,
          account_state,
        });
      } else {
        console.log(date + " : Request POST Login User failed code 401");
        reject({
          status: "Unauthorized",
          code: 401,
          message: "Invalid nik or password",
        });
      }
    });
  });
};

const updateUser = (request, reply) => {
  const { id } = request.query;
  const update = request.payload;

  return new Promise((resolve, reject) => {
    userModel.updateUser(id, update, (error, results) => {
      if (error) reject(error);
      console.log(date + " : Request PUT Reporting success code 201");
      resolve({
        status: "Success",
        code: 201,
        data: results,
      });
    });
  });
};

const getReportingByUserId = (request, reply) => {
  const { userId } = request.query;
  if (userId) {
    return new Promise((resolve, reject) => {
      reportingModel.getReportingByUserId(userId, (error, result) => {
        if (error) reject(error);
        console.log(
          date + " : Request GET Reporting by user_id success code 200"
        );
        resolve({
          status: "Success",
          code: 200,
          data: result,
        });
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      reject({
        status: "Error",
        code: 400,
        message: "Missing user_id parameter",
      });
    });
  }
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

  // Tambahan
  updateReportingReason,
  vote,
  loginEmployee,
  getCode,
  createCode,
  sendCode,

  //User
  createUser,
  getUser,
  loginUser,
  getUsersByUserId,
  getReportingByUserId,
  updateUser,
};
