'use strict';
const mysql = require('mysql2/promise'); // Import mysql2's promise-based version
const config = require('../../config.json');

let pool; // Declare a global connection pool

class MySQLService {
  constructor() {
    // Initialize the connection pool if it doesn't exist
    if (!pool) {

      const dbConfig = {
      host: config.isLocalDB ? 'localhost' : 'zuju.com',
      user: config.isLocalDB ? 'root' : 'zuju_prod_user',
      password: config.isLocalDB ? '' : 'xxxxxx',
      database: config.isLocalDB ? 'zuju' : 'zuju_prod',
      waitForConnections: true,
      connectionLimit: 10,
      maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
      idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
      multipleStatements: true
      };

      pool = mysql.createPool(dbConfig); // Create a global connection pool using mysql2

    }
  }

  
// Function to run a query with retries
async  runquery(sql, maxRetries = 3, retryInterval = 1000) {
  let connection;
  let retries = 0;
  while (retries < maxRetries) {
    try {
      connection = await pool.getConnection();
      const [rows, fields] = await connection.execute(sql);
      return rows;
    } catch (error) {
      console.error(error);
      if ((error.code === 'ECONNRESET' || error.code==='ETIMEDOUT') && retries < maxRetries - 1) {
        // Retry the operation after a delay
        retries++;
        await new Promise((resolve) => setTimeout(resolve, retryInterval));
        continue;
      } else {
        // Propagate the error if it's not a connection reset error or retries are exhausted
        throw error;
      }
    } finally {
      if (connection) {
        connection.release(); // Always release the connection, whether the query succeeded or failed
      }
    }
  }
  throw new Error('Max retries reached, query failed.');
}


}

module.exports = MySQLService;