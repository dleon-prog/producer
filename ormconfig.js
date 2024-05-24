module.exports = {
  name: 'default',
  type: 'mysql',
  url: 'mysql2://root:@localhost:3306/postgre',
  database: 'postgre',
  migrations: ['./src/migrations/*.ts'],
  cli: {
    migrationsDir: './src/migrations/'
  },
}
