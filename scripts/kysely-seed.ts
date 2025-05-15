import 'dotenv/config'
import { db } from '@/lib/kysely'

async function main() {
  await db.insertInto('users').values([
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Charlie', email: 'charlie@example.com' },
  ]).execute()

  await db.destroy()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
}).finally(() => {
  process.exit(0)
})
