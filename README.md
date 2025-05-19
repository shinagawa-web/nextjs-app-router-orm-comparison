> This repository is part of our technical blog:
> [Next.js App Router × ORM hands-on: Prisma / Drizzle / Kysely with Docker](http://shinagawa-web.com/blogs/nextjs-orm-docker-hands-on)

# ORM Comparison in Next.js App Router

This repository provides a hands-on comparison of popular TypeScript-friendly ORMs — **Prisma**, **Drizzle**, and **Kysely** — in the context of **Next.js App Router**.

## 📦 What’s Included

- ✅ Implementations for each ORM using `/api/[orm]/users` route
- ✅ Schema and migration setup
- ✅ Seed scripts
- ✅ Docker setup with PostgreSQL and MySQL
- ✅ Type-safe query examples
- ✅ Visual structure to help you compare and choose

## 📁 Project Structure

```
src/
├── app/api/[orm]/users/route.ts # API endpoints for Prisma / Drizzle / Kysely
├── lib/ # ORM clients
├── schema/ # Drizzle schema
├── types/ # Kysely schema
├── prisma/ # Prisma schema & migrations
├── drizzle/ # Drizzle migration artifacts
├── scripts/ # Seed scripts for each ORM
```

## 🚀 Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/your-username/nextjs-orm-comparison.git
cd nextjs-orm-comparison
npm install
```

### 2. Setup Environment
Create `.env` and `.env.local`

```
# .env.local
POSTGRES_URL=postgresql://user:password@localhost:5432/appdb
MYSQL_URL=mysql://user:password@localhost:3306/appdb
```

### 3. Start DBs with Docker

```
docker-compose up -d
```

### 4. Run Migrations

```
# Prisma
npx prisma migrate dev

# Drizzle
npx drizzle-kit push

# Kysely (manual or via migration script)
```

### 5. Seed Sample Data

```
# Prisma
npx ts-node prisma/seed.ts

# Drizzle
npx ts-node --esm scripts/drizzle-seed.ts

# Kysely
npx ts-node --esm scripts/kysely-seed.ts
```

### 6. Start Dev Server

```
npm run dev
```

Visit:

- http://localhost:3000/api/prisma/users
- http://localhost:3000/api/drizzle/users
- http://localhost:3000/api/kysely/users

## 📊 Comparison Highlights

| ORM     | Dev Experience | Migrations | Type Safety | Edge Runtime | Easy Init |
| ------- | -------------- | ---------- | ----------- | ------------ | --------- |
| Prisma  | ◎              | ◎          | ◎           | △            | ◎         |
| Drizzle | ◎              | ○          | ◎           | ◎            | ◎         |
| Kysely  | ○              | △          | ◎           | ◎            | ○         |

## 📝 Notes

- Prisma works best with PostgreSQL; some features may not work on PlanetScale (MySQL).
- Drizzle and Kysely offer great flexibility and edge support.
- This project focuses on App Router only. No Pages Router or GraphQL.

## 📖 License
MIT

## 🙌 Acknowledgements

Built with ❤️ by [Kazutomo Deguchi](https://github.com/shinagawa-web)
Inspired by practical struggles in ORM selection for modern frontend-backend fullstack development.