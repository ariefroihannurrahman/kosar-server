/* eslint linebreak-style: ["error", "windows"] */

import Hapi from '@hapi/hapi';
import routes from './src/routes.js';
import * as dotenv from 'dotenv';

dotenv.config();
const config = {
  // port: process.env.NODE_PORT,
  // host: process.env.NODE_HOST,
  port: 3000,
//   host: 'localhost',
  host: 'kosar-server-k9kj3qadw-ariefroihannurrahman1-gmailcom.vercel.app',
};

const init = async () => {
  const server = Hapi.server(config);
  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
