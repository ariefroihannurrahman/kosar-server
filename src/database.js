/* eslint linebreak-style: ["error", "windows"] */
import MySQL from 'mysql';
import * as dotenv from 'dotenv';

dotenv.config();

const connection = MySQL.createConnection({
  // host: process.env.NODE_DATABASE_HOST,
  // port: process.env.NODE_DATABASE_PORT,
  // user: process.env.NODE_DATABASE_USER,
  // password: process.env.NODE_DATABASE_PASSWORD,
  // database: process.env.NODE_DATABASE_DATABASE,
  host: 'aqf.h.filess.io',
  port: 3307,
  user: 'KosarServer_blowoccur',
  password: '14c04729b58b831683bf657f867a69a6ce8f7092',
  database: 'KosarServer_blowoccur',
});

connection.connect((error) => {
  if (error) throw error;
  console.log('MySQL Connected!');
});

export default connection;
