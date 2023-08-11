import { DataSourceOptions, DataSource } from 'typeorm'
import { config } from 'dotenv'
import { join } from 'path'

config()

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  synchronize: false,
  migrationsTableName: 'migrations',
  migrations: ['dist/db/migrations/*.{ts,js}'],
}

const dataSource = new DataSource(dataSourceOptions)
export default dataSource
