import { drizzle } from 'drizzle-orm/node-postgres'
import { users } from '@/schema/drizzle-schema'
import { Client } from 'pg'
import 'dotenv/config'

const client = new Client({ connectionString: process.env.POSTGRES_URL })
await client.connect()
const db = drizzle(client)

await db.insert(users).values([
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' },
  { name: 'Charlie', email: 'charlie@example.com' },
])

await client.end()