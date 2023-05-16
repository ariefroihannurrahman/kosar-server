/* eslint linebreak-style: ["error", "windows"] */

import Hapi from '@hapi/hapi';
import routes from './routes.js';
import * as dotenv from 'dotenv';

dotenv.config();
const config = {
  port: process.env.NODE_PORT,
  host: process.env.NODE_HOST,
};

const init = async () => {
  const server = Hapi.server(config);
  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

export default init;
