# boilerplate-ts-node-drizzle

## Description

This is a boilerplate project using `InversifyExpressServer` to set up both API routes and database schema

## Getting Started

1. `yarn` to install dependencies
2. Create database with `createdb :DATABASE_NAME`
3. Create `.env.development` file from the `.env.template` and update values
4. Run `yarn db:generate` to create migration files
5. Run `yarn db:migrate` to run migrations
6. Run `yarn dev` to start dev server
