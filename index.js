/* eslint linebreak-style: ["error", "windows"] */

import Hapi from '@hapi/hapi';
import routes from './src/routes.js';
import * as dotenv from 'dotenv';
import hapiCors from 'hapi-cors';

dotenv.config();
const config = {
  port: process.env.NODE_PORT,
  host: process.env.NODE_HOST,
};

const init = async () => {
  const server = Hapi.server(config);
  await server.register({
    plugin: hapiCors,
    options: {
      origins: ['*'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
  });
  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
