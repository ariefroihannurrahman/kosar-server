/* eslint linebreak-style: ["error", "windows"] */
import * as handler from "./handlers.js";

const routes = [
  {
    path: "/",
    method: "GET",
    handler: handler.home,
  },
  {
    path: "/employee",
    method: "GET",
    handler: handler.getEmployee,
  },
  {
    path: "/reporting",
    method: "GET",
    handler: handler.getReporting,
  },
  {
    path: "/c/emp",
    method: "POST",
    handler: handler.createEmployee,
  },
  {
    path: "/c/rep",
    method: "POST",
    handler: handler.createReporting,
  },
  {
    path: "/u/emp",
    method: "PUT",
    handler: handler.updateEmployee,
  },
  {
    path: "/u/rep",
    method: "PUT",
    handler: handler.updateReporting,
  },
  {
    path: "/d/emp",
    method: "DELETE",
    handler: handler.deleteEmployee,
  },
  {
    path: "/d/rep",
    method: "DELETE",
    handler: handler.deleteReporting,
  },
  //Tambahan
  {
    path: "/u/rep/reason",
    method: "PUT",
    handler: handler.updateReportingReason,
  },
  {
    path: "/u/rep/vote",
    method: "PUT",
    handler: handler.vote,
  },
  {
    path: "/l/emp",
    method: "POST",
    handler: handler.loginEmployee,
  },
  {
    path: "/verify",
    method: "GET",
    handler: handler.getCode,
  },
  {
    path: "/c/veriy",
    method: "POST",
    handler: handler.createCode,
  },

  {
    path: "/s/verify",
    method: "POST",
    handler: handler.sendCode,
  },
  {
    path: "/user/reg",
    method: "POST",
    handler: handler.createUser,
  },
  {
    path: "/user",
    method: "GET",
    handler: handler.getUser,
  },
  {
    path: "/usersbyid",
    method: "GET",
    handler: handler.getUsersByUserId,
  },

  {
    path: "/user/log",
    method: "POST",
    handler: handler.loginUser,
  },
  {
    path: "/reporting/byUserId",
    method: "GET",
    handler: handler.getReportingByUserId,
  },
  {
    path: "/u/user",
    method: "PUT",
    handler: handler.updateUser,
  },
];

export default routes;
