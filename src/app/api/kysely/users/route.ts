import { db } from '@/lib/kysely'

export async function GET() {
  const users = await db
  .selectFrom('users')
  .select(['id', 'name'])
  .where('email', '=', 'alice@example.com')
  .execute()
  return Response.json(users)
}