module.exports = {
    myDB: {
      connector: 'mysql',
      hostname: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'todo-example',
    }
  };