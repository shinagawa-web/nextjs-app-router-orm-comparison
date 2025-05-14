import { db } from '@/lib/drizzle'
import { users } from '@/schema/drizzle-schema'

export async function GET() {
  const result = await db.select().from(users)
  return Response.json(result)
}