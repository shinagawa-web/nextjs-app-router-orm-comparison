
# ORM Comparison in Next.js App Router

A hands-on comparison project for using multiple ORMs (Prisma, Drizzle ORM, Kysely) in a Next .js App Router setup with Docker-based MySQL/PostgreSQL.
Corresponds to the blog article:

> This repository is part of our technical blog:
> [Next.js App Router × ORM hands-on: Prisma / Drizzle / Kysely with Docker](http://shinagawa-web.com/blogs/nextjs-orm-docker-hands-on)

## Why

Choosing an ORM is rarely about performance alone.  
It affects how teams collaborate, onboard new members, evolve schemas, and diagnose issues in production.

Next.js App Router blurs the boundary between UI and backend logic, which means:

- Database access patterns become part of component and route design.
- Type safety and schema consistency matter more than ever.
- The cost of “rewriting later” becomes significantly higher.

This repository provides a **hands-on, side-by-side comparison** of Prisma, Drizzle ORM, and Kysely under the same conditions:

- Same database schema
- Same API behavior
- Same application structure

So the differences you observe are **real trade-offs**, not theoretical benchmarks.

## Features

- Monorepo structure tailored for Next.js App Router + TypeScript
- Two database engines via Docker: PostgreSQL and MySQL
- Three ORMs implemented side-by-side: Prisma, Drizzle, Kysely
- Example endpoint (/api/<orm>/users) implemented for each ORM
- Comparison of: migration setup, type-safety, runtime cost, Team experience
- Clear directory structure and scripts for quick start

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

## What You Can Learn

- How to set up Next.js App Router with multiple ORMs in one codebase
- How to configure Docker for PostgreSQL & MySQL simultaneously
- How each ORM handles: migrations, typing, API integration, team onboarding
- How to judge which ORM fits your project goals, team skills, and operational constraints

## For Teams / Production Use

- Pin versions of ORMs, Node.js, database engines to avoid drift
- Use CI to enforce consistent schema + implementation across ORMs
- Document your decision rationale: what trade-offs matter for your project
- Scale this pattern: add contract tests or performance tests for your chosen ORM


## 📖 License
MIT

## 🙌 Acknowledgements

Built with ❤️ by [Kazutomo Deguchi](https://github.com/shinagawa-web)
Inspired by practical struggles in ORM selection for modern frontend-backend fullstack development.
