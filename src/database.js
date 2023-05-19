/* eslint linebreak-style: ["error", "windows"] */
import MySQL from 'mysql';
import * as dotenv from 'dotenv';

dotenv.config();

const connection = MySQL.createConnection({
  host: process.env.NODE_DATABASE_HOST,
  port: process.env.NODE_DATABASE_PORT,
  user: process.env.NODE_DATABASE_USER,
  password: process.env.NODE_DATABASE_PASSWORD,
  database: process.env.NODE_DATABASE_DATABASE,
});

connection.connect((error) => {
  if (error) throw error;
  console.log('MySQL Connected!');
});

export default connection;
