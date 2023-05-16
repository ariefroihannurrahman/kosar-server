/* eslint linebreak-style: ["error", "windows"] */

import {
  home,
  getEmployee,
  getReporting,
  createReporting,
  createEmployee,
  updateEmployee,
  updateReporting,
  deleteEmployee,
  deleteReporting,
  upVote,
} from './handlers.js';
// import {nanoid} from 'nanoid';

const routes = [
  {
    path: '/',
    method: 'GET',
    handler: home,
  },
  {
    path: '/employee',
    method: 'GET',
    handler: getEmployee,
  },
  {
    path: '/reporting',
    method: 'GET',
    handler: getReporting,
  },
  {
    path: '/c/emp',
    method: 'POST',
    handler: createEmployee,
  },
  {
    path: '/c/rep',
    method: 'POST',
    handler: createReporting,
  },
  {
    path: '/u/emp',
    method: 'PUT',
    handler: updateEmployee,
  },
  {
    path: '/u/rep',
    method: 'PUT',
    handler: updateReporting,
  },
  {
    path: '/d/emp',
    method: 'DELETE',
    handler: deleteEmployee,
  },
  {
    path: '/d/rep',
    method: 'DELETE',
    handler: deleteReporting,
  },
  {
    path: '/u/rep/upvote',
    method: 'PUT',
    handler: upVote,
  },
];

export default routes;
