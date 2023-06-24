/* eslint linebreak-style: ["error", "windows"] */
import connection from "../src/database.js";
import { v4 } from "uuid";

const date = new Date().toLocaleDateString("id-ID");
const reportingModel = {};

reportingModel.getAllReporting = (callback) => {
  const query = "SELECT * FROM reporting";
  connection.query(query, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

reportingModel.getReportingByID = (id, callback) => {
  const query = "SELECT * FROM reporting WHERE complaint_id = ?";
  connection.query(query, id, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

// Tambahan
reportingModel.createReporting = (detail, callback) => {
  const saveDate = date.split("/");
  const workStatus = "Pending";

  const query = `
  INSERT INTO reporting (
    updatedAt, 
    createdAt, 
    complaint_number, 
    complaint_id, 
    complainants_name, 
    complaint_title, 
    complaint_date, 
    complaint_category, 
    description, 
    work_status, 
    vote,
    user_id
    ) VALUES (
        '${saveDate[2]}-${saveDate[1]}-${saveDate[0]}', 
        '${saveDate[2]}-${saveDate[1]}-${saveDate[0]}', 
        NULL, 
        '${v4()}', 
        '${detail.complainants_name}', 
        '${detail.complaint_title}', 
        '${saveDate[2]}-${saveDate[1]}-${saveDate[0]}', 
        '${detail.complaint_category}', 
        '${detail.description}', 
        '${workStatus}',  
        '0',
        '${detail.user_id}'
        );
    `;

  connection.query(query, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

//Tambahan
reportingModel.updateReporting = (id, update, callback) => {
  const saveDate = date.split("/");
  let query = `
    UPDATE reporting 
    SET updatedAt = '${saveDate[2]}-${saveDate[1]}-${saveDate[0]}',
    work_status = '${update.work_status || "Accepted" || "Completed"}'
    WHERE complaint_id = '${id}';
  `;

  if (update.work_status === "Rejected") {
    query = `
      UPDATE reporting 
      SET updatedAt = '${saveDate[2]}-${saveDate[1]}-${saveDate[0]}',
      reason = '${update.reason}', 
      work_status = '${update.work_status}'
      WHERE complaint_id = '${id}';
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

reportingModel.deleteReporting = (id, callback) => {
  const query = "DELETE FROM reporting WHERE complaint_id = ?";
  connection.query(query, id, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
};

//Tambahan
reportingModel.updateReportingReason = (id, reason, callback) => {
  const query = `
    UPDATE reporting 
    SET reason = '${reason}' 
    WHERE complaint_id = '${id}';
  `;

  connection.query(query, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

//Tambahan
reportingModel.vote = (id, vote, callback) => {
  const query = `
    UPDATE reporting 
    SET vote = ${vote} 
    WHERE complaint_id = '${id}'
  `;

  connection.query(query, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

//rev
reportingModel.getReportingByUserId = (userId, callback) => {
  const query = `SELECT * FROM reporting WHERE user_id = ?`;
  connection.query(query, userId, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

export default reportingModel;
