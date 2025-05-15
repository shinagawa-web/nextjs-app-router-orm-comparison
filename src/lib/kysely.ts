import { Kysely, MysqlDialect } from 'kysely'
import { createPool } from 'mysql2'
import type { Database } from '@/types/db'

const dialect = new MysqlDialect({
  pool: createPool({
    database: 'appdb',
    user: 'user',
    password: 'password',
    host: 'localhost',
    port: 3306,
  })
})

export const db = new Kysely<Database>({ dialect })